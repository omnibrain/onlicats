import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { Layout } from "../../common/components/Layout";

const Profile: NextPage = () => {
  const { data, status } = useSession();

  console.log({ data, status });

  return (
    <Layout>
      <div>Content...</div>
    </Layout>
  );
};

export default Profile;
