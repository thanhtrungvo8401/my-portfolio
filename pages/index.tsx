import Head from 'next/head';
import Home from '../containers/home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Trung vo - Web Developer</title>
      </Head>

      <Home />
    </>
  );
}
