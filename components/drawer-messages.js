import { useEffect } from "react";
import styles from "./drawer-messages.module.css";
const DrawerMessages = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.drawermessages} data-animate-on-scroll>
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      <div className={styles.messages}>
        <b className={styles.messages1}>Messages</b>
      </div>
      <div className={styles.conversation}>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.cameronWilliamson}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.div}>14:32</div>
        </div>
      </div>
    </div>
  );
};

export default DrawerMessages;
