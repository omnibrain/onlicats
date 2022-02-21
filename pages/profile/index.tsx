import { gql } from "@apollo/client";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Layout } from "../../common/components/Layout";
import { onlicatsGraphql } from "../../services/onlicats-graphql";

const Profile: NextPage = () => {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      onlicatsGraphql
        .query({
          query: gql`
            query {
              user {
                id
              }
            }
          `,
        })
        .then((result) => console.log(result));
    }
  }, [status]);

  return (
    <Layout>
      <div>Content...</div>
    </Layout>
  );
};

export default Profile;
