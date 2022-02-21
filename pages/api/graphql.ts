import { createServer } from "@graphql-yoga/node";
import { PrismaClient } from "@prisma/client";
import { makeSchema, objectType, queryType, stringArg } from "nexus";
import { getSession } from "./_get-session";

export const db = new PrismaClient();

const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("emailVerified");
    t.string("image");
  },
});

const Account = objectType({
  name: "Account",
  definition(t) {
    t.string("username");
    t.string("email");
  },
});

const Query = queryType({
  definition(t) {
    t.field("user", {
      type: User,
      args: {
        id: stringArg(),
      },
      resolve: async (_, __, config) => {
        const session = await getSession(config);

        if (!session) {
          return null;
        }

        return db.user.findUnique({ where: { id: session.user.id } });
      },
    });
  },
});

const schema = makeSchema({
  types: [Account, User, Query],
});

const server = createServer({
  schema,
  cors: false,
  endpoint: "/api/graphql",
  context: async (req) => {
    return { ...req, db };
  },
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default server.requestListener;
