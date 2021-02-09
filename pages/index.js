import Head from 'next/head';
import Hero from '../components/hero';
import About from '../components/about';
import Interests from '../components/interests';
import Project from '../components/projects';
import Contact from '../components/contact';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero />

      <About />
      <Interests />
      <Project />
      <Contact />
    </>
  );
}
