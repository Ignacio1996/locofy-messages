import MessageCard from "../components/message-card";
import MessagesContainer from "../components/messages-container";
import styles from "./index.module.css";
const UserMessages = () => {
  return (
    <div className={styles.userMessages}>
      <div className={styles.messagesnav}>
        <b className={styles.messages}>Messages</b>
        <div className={styles.conversation}>
          <MessageCard />
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
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>
      <MessagesContainer />
    </div>
  );
};

export default UserMessages;
