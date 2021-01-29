import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Hero from '../components/hero';
import About from '../components/about';
import Interests from '../components/interests';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Project from '../components/projects';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Nav />
          <Hero />

          <About />
          <Interests />
          <Project />
          <Contact />
        </main>
      </div>
      <Footer />
      <script
        data-name="BMC-Widget"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="aleksa"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="rgb(121, 214, 181)"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </div>
  );
}
