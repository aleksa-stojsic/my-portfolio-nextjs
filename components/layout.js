import styles from '../styles/Home.module.css';
import Footer from './footer';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
