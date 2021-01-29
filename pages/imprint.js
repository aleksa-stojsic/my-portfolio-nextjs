import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Imprint() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.imprintPage}>
        <div className={styles.imprintText}>
          <h1>Imprint</h1>
          <br />
          <h2>Information:</h2>
          <p>
            Aleksa Stojšić
            <br />
            Belgrade
            <br />
            Serbia
          </p>
          <p>
            E-Mail Address:{' '}
            <span className={styles.underline}>stojsic.aleksa@gmail.com</span>
          </p>
          <hr />
          <h3>Disclaimers</h3>
          <p>
            All the information on this website -
            https://aleksa-stojsic.github.io - is published in good faith and
            for general information purpose only. Aleksa Stojsic does not make
            any warranties about the completeness, reliability and accuracy of
            this information. Any action you take upon the information you find
            on this website (Aleksa Stojsic), is strictly at your own risk.
            Aleksa Stojsic will not be liable for any losses and/or damages in
            connection with the use of our website. Our Disclaimer was generated
            with the help of the Disclaimer Generator and the Privacy Policy
            Generator. Please be also aware that when you leave our website,
            other sites may have different privacy policies and terms which are
            beyond our control. Please be sure to check the Privacy Policies of
            these sites as well as their "Terms of Service" before engaging in
            any business or uploading any information.
          </p>
          <hr />
          <h3>Liability for Links</h3>
          <p>
            Our offer includes links to external third party websites. We have
            no influence on the contents of those websites, therefore we cannot
            guarantee for those contents. Providers or administrators of linked
            websites are always responsible for their own contents.
          </p>
          <p>
            The linked websites had been checked for possible violations of law
            at the time of the establishment of the link. Illegal contents were
            not detected at the time of the linking. A permanent monitoring of
            the contents of linked websites cannot be imposed without reasonable
            indications that there has been a violation of law. Illegal links
            will be removed immediately at the time we get knowledge of them.
          </p>
          <hr />
          <h3>Copyright</h3>
          <p>
            Contents and compilations published on these websites by the
            providers are subject to Serbian copyright laws. Reproduction,
            editing, distribution as well as the use of any kind outside the
            scope of the copyright law require a written permission of the
            author or originator. Downloads and copies of these websites are
            permitted for private use only. The commercial use of our contents
            without permission of the originator is prohibited.
          </p>
          <p>
            Copyright laws of third parties are respected as long as the
            contents on these websites do not originate from the provider.
            Contributions of third parties on this site are indicated as such.
            However, if you notice any violations of copyright law, please
            inform us. Such contents will be removed immediately.
          </p>
        </div>
      </div>
    </>
  );
}
