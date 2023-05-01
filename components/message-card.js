import styles from "./message-card.module.css";
const MessageCard = () => {
  return (
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
  );
};

export default MessageCard;
