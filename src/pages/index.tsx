import { trpc } from "@/utils/trpc";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <Head>
        <title>Track My Fitness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>{hello.data ?? "Loading..."}</div>
    </>
  );
}
