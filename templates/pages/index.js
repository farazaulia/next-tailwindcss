import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next + Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-screen h-screen items-center justify-center">
        <p className="text-5xl text-gray-800 font-semibold leading-12">
          Hello from Next.js + Tailwind CSS 👋
        </p>
      </main>
    </>
  );
}
