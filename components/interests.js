import styles from '../styles/Interests.module.css';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';

const Interest = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {}, []);

  return (
    <section id="skills" className={styles.skills}>
      <h3 className="aboutMeTitle">Interests & Skills</h3>

      <div className={styles.interests}>
        <div className={styles.interestBtn}>
          <div className={styles.interestIco}>
            <Image
              className={styles.interestImg}
              src="/icons/html.png"
              alt="Picture of the author"
              width={20}
              height={20}
            />
          </div>{' '}
          HTML
        </div>
        <div className={styles.interestBtn}>
          <div className={styles.interestIco}>
            <Image
              className={styles.interestImg}
              src="/icons/css.png"
              alt="Picture of the author"
              width={20}
              height={20}
            />
          </div>{' '}
          CSS
        </div>
        <div className={styles.interestBtn}>
          <div className={styles.interestIco}>
            <Image
              className={styles.interestImg}
              src="/icons/js.png"
              alt="Picture of the author"
              width={20}
              height={20}
            />
          </div>{' '}
          JavaScript
        </div>
        <div className={styles.interestBtn}>
          <div className={styles.interestIco}>
            <Image
              className={styles.interestImg}
              src="/icons/react.png"
              alt="Picture of the author"
              width={20}
              height={20}
            />
          </div>{' '}
          React.js
        </div>
        <div className={styles.interestBtn}>
          <div className={styles.interestIco}>
            <Image
              className={styles.interestImg}
              src="/icons/node.png"
              alt="Picture of the author"
              width={20}
              height={20}
            />
          </div>{' '}
          Node.js
        </div>
        {!showMore && (
          <div className={styles.interestBtnMore}>
            <button
              onClick={() => setShowMore(true)}
              className={styles.loadMore}
            >
              {' '}
              + Load More
            </button>
          </div>
        )}

        {showMore && (
          <Fragment>
            <div className={styles.interestBtn}>
              <div className={styles.interestIco}>
                <Image
                  className={styles.interestImg}
                  src="/icons/db.png"
                  alt="Picture of the author"
                  width={20}
                  height={20}
                />
              </div>{' '}
              SQL/NoSQL Database
            </div>
            {/* <div className={styles.interestBtn}>
              <div className={styles.interestIco}>
                <Image
                  className={styles.interestImg}
                  src="/icons/gatsby.png"
                  alt="Picture of the author"
                  width={20}
                  height={20}
                />
              </div>{' '}
              Gatsby.js
            </div> */}
            <div className={styles.interestBtn}>
              <div className={styles.interestIco}>
                <Image
                  className={`${styles.interestImg} ${styles.next}`}
                  src="/icons/next.png"
                  alt="Picture of the author"
                  width={30}
                  height={20}
                />
              </div>{' '}
              Next.js
            </div>
            <div className={styles.interestBtn}>
              <div className={styles.interestIco}>
                <Image
                  className={styles.interestImg}
                  src="/icons/basketball.png"
                  alt="Picture of the author"
                  width={20}
                  height={20}
                />
              </div>{' '}
              Basketball
            </div>
            <div className={styles.interestBtn}>
              <div className={styles.interestIco}>
                <Image
                  className={styles.interestImg}
                  src="/icons/joystick.png"
                  alt="Picture of the author"
                  width={20}
                  height={20}
                />
              </div>{' '}
              Video Games
            </div>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Interest;
