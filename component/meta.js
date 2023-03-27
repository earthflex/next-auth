import Head from "next/head";

export default function Meta({
  title = "Next Auth & Chakra UI",
  description = "Next.js Next Auth & Chakra UI",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="icon" type="image/png" href="favicon.png" />
      <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/apple-touch-icon-precomposed.png" />
    </Head>
  );
}
