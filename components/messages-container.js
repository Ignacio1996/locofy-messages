import styles from "./messages-container.module.css";
const MessagesContainer = () => {
  return (
    <div className={styles.messagescontainer}>
      <div className={styles.conversationheader}>
        <b className={styles.cameron}>Cameron</b>
      </div>
      <div className={styles.conversationcontainer}>
        <div className={styles.conversationBubbleWrapper}>
          <div className={styles.conversationBubble}>
            <div className={styles.whatDoYou}>What do you mean?</div>
          </div>
        </div>
        <div className={styles.conversationBubbleContainer}>
          <div className={styles.conversationBubble1}>
            <div className={styles.iThinkThe}>
              I think the idea that things are chaning isnt good
            </div>
          </div>
        </div>
      </div>
      <div className={styles.messageinput}>
        <div className={styles.composeNewBtn}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.typeAMessage}>Type a message</div>
        </div>
        <img
          className={styles.composeNewBtn1}
          alt=""
          src="/compose-new-btn@2x.png"
        />
      </div>
    </div>
  );
};

export default MessagesContainer;
