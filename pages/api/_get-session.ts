import { Session } from "next-auth";
import { getSession as getNextAuthSession } from "next-auth/react";

export async function getSession(config: any): Promise<Session | null> {
  // this is a hack to get nextauth.js to work with graphql-yoga
  const headersObj: { [k: string]: string } = {};
  (config.request.headers as Headers).forEach((value, key) => {
    headersObj[key] = value;
  });

  const session = await getNextAuthSession({
    req: {
      ...config.request,
      headers: headersObj,
    },
  });

  return session;
}
