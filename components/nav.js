import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.logo}>
        <Link href="/">
          <a>as.</a>
        </Link>
      </div>

      <div className={styles.topLinks}>
        <a href="#about">About Me</a>

        <a href="#skills">Interests/Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact" className={styles.contactBtn}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
