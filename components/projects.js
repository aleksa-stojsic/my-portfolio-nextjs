import styles from '../styles/Projects.module.css';
import Image from 'next/image';

const Project = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h3 className="aboutMeTitle">Projects</h3>
      </div>
      <div className={styles.allProjects}>
        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <div className={styles.projectCategory}>🕹️ Category #1</div>
            <div className={styles.projectTitle}>Project #1</div>
            <p>Working on it...</p>
            <div className={styles.projectTags}>
              <span className="underline">HTML</span>
              <span className="underline">CSS</span>
              <span className="underline">JavaScript</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/aleksa-stojsic"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <svg
                  version="1.1"
                  role="img"
                  fill="#555555"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="262 -262 1024 1024"
                >
                  <path
                    d="M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3
 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9
 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8
 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3
 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6
 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3
 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://unsplash.com/@clemhlrdt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 194.818 194.818"
                  x="0px"
                  y="0px"
                  role="img"
                  fill="#555555"
                  width="194.818px"
                  height="194.818px"
                >
                  <g>
                    <path
                      d="M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2
 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1
 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"
                    ></path>
                    <path
                      d="M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0
 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2
 C158,80.8,153.2,76.5,147.7,77.3z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.projectImg}>
            <Image
              className={styles.interestImg}
              src="https://picsum.photos/400/300"
              alt="Picture of the author"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Image
              className={styles.interestImg}
              src="https://picsum.photos/400/300"
              alt="Picture of the author"
              width={400}
              height={300}
            />
          </div>
          <div className={styles.projectDetails}>
            <div className={styles.projectCategory}>📓 Category #2</div>
            <div className={styles.projectTitle}>Project #2</div>
            <p>Working on it...</p>
            <div className={styles.projectTags}>
              <span className="underline">HTML</span>
              <span className="underline">CSS</span>
              <span className="underline">JavaScript</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/aleksa-stojsic"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <svg
                  version="1.1"
                  role="img"
                  fill="#555555"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="262 -262 1024 1024"
                >
                  <path
                    d="M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3
 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9
 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8
 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3
 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6
 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3
 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://unsplash.com/@clemhlrdt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 194.818 194.818"
                  x="0px"
                  y="0px"
                  role="img"
                  fill="#555555"
                  width="194.818px"
                  height="194.818px"
                >
                  <g>
                    <path
                      d="M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2
 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1
 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"
                    ></path>
                    <path
                      d="M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0
 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2
 C158,80.8,153.2,76.5,147.7,77.3z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <div className={styles.projectCategory}>🧰 Category #3</div>
            <div className={styles.projectTitle}>Project #3</div>
            <p>Working on it...</p>
            <div className={styles.projectTags}>
              <span className="underline">HTML</span>
              <span className="underline">CSS</span>
              <span className="underline">JavaScript</span>
            </div>
            <div className={styles.projectLinks}>
              <a
                href="https://github.com/aleksa-stojsic"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <svg
                  version="1.1"
                  role="img"
                  fill="#555555"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="262 -262 1024 1024"
                >
                  <path
                    d="M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3
 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9
 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8
 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3
 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6
 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3
 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://unsplash.com/@clemhlrdt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 194.818 194.818"
                  x="0px"
                  y="0px"
                  role="img"
                  fill="#555555"
                  width="194.818px"
                  height="194.818px"
                >
                  <g>
                    <path
                      d="M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2
 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1
 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"
                    ></path>
                    <path
                      d="M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0
 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2
 C158,80.8,153.2,76.5,147.7,77.3z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.projectImg}>
            <Image
              className={styles.interestImg}
              src="https://picsum.photos/400/300"
              alt="Picture of the author"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
      <a
        className={styles.ctaBtn}
        href="https://github.com/aleksa-stojsic"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="External Link"
      >
        <button className={styles.ctaBtnBtn}>
          <svg
            version="1.1"
            role="img"
            fill="#FAFAFA"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="262 -262 1024 1024"
          >
            <path
              d="M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3
 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9
 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8
 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3
 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6
 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3
 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z"
            ></path>
          </svg>{' '}
          See More on GitHub
        </button>
      </a>
    </section>
  );
};

export default Project;
