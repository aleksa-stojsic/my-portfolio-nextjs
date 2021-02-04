import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.me}>
      <div className={styles.aboutText}>
        <h3 className="aboutMeTitle">About me</h3>
        <p>
          Born in 1996, I grew up during the digital rise. As a teenager, I
          started building my first websites and got more and more interested in
          the digital economy.
        </p>
        <p>
          After school, I started to study{' '}
          <span className="underline">
            Computer Science as a bachelor's degree
          </span>{' '}
          at Singidunum University and completed many online courses alongside.
        </p>
        <p>
          I am a passionate, energetic, and self-motivated junior{' '}
          <span className="underline">full-stack software developer</span> eager
          to turn ideas into applications. My ambitions are to stay on the
          leading edge of the <span className="underline">web development</span>{' '}
          industry and find new learning opportunities or projects to keep
          improving rapidly as a developer.
        </p>
        <p>
          Out of the office, you will find me dreaming of basketball, playing
          video games, and petting all the good cats.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <Image
          className={styles.aboutImg}
          src="/me.webp"
          alt="Picture of the author"
          width={288}
          height={432}
        />
      </div>
    </section>
  );
};

export default About;
