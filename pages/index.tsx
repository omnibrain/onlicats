import type { NextPage } from "next";
import { signIn, useSession, signOut } from "next-auth/react";
import img from "./img.svg";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email ?? "unknown"} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Home;
