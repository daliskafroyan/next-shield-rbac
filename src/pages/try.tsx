import Head from 'next/head';
import Link from 'next/link';

export default function PageName() {
  return (
    <>
      <Head>
        <title>PageName | JS Example - NextShield</title>
        <meta name="description" content="NextShield Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>PageName</h1>
      <Link href="/private">Private</Link>
      <Link href="/control-panel">Control Panel</Link>
      <Link href="/login">Login</Link>
      <Link href="/">Home</Link>
    </>
  );
}
