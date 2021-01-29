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
};

export default Layout;
