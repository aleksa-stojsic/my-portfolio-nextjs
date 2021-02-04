import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className={styles.mainNav}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.logoA}>as.</a>
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
        <div className={styles.container} onClick={handleToggle}>
          <div
            className={`${styles.bar1} ${!isActive ? styles.change1 : ''}`}
          ></div>
          <div
            className={`${styles.bar2} ${!isActive ? styles.change2 : ''}`}
          ></div>
          <div
            className={`${styles.bar3} ${!isActive ? styles.change3 : ''}`}
          ></div>
        </div>
      </nav>
      <div
        className={`${styles.sideBarHide} ${!isActive ? styles.sideBar : ''}`}
      >
        <nav className={`${!isActive ? styles.sideBarNav : ''}`}>
          <a href="#about">About Me</a>

          <a href="#skills">Interests/Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact" className={styles.contactBtn}>
            Contact
          </a>
        </nav>
      </div>
      <div className={`${!isActive ? styles.sideBarBackDrop : ''}`}></div>
      {/* <div className={styles.sideBar}></div> */}
    </>
  );
};

export default Nav;
