import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.year}>©{n}</div> */}
      <div className={styles.footerLinks}>
        <a href="/" className={styles.logoFooter}>
          as.
        </a>

        <div className={styles.rightFooterLinks}>
          <a href="/privacy" className={styles.privacy}>
            Privacy
          </a>
          <a href="/imprint" className={styles.imprint}>
            Imprint
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
