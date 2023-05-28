import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({
    text: "from TRPC!",
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
        <p className="text-2xl text-white">
          {hello.status == "loading" && "Loading tRPC query..."}
          {hello.status == "error" && "tRPC error!"}
          {hello.status == "success" && hello.data.greeting}
        </p>
        <Link href="/protected" className="text-xl">
          Check out another protected page
        </Link>
      </main>
    </>
  );
};

export default Home;
