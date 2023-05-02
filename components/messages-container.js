import { useState, useCallback } from "react";
import DrawerMessages from "./drawer-messages";
import PortalDrawer from "./portal-drawer";
import styles from "./messages-container.module.css";
const MessagesContainer = () => {
  const [isDrawerMessagesOpen, setDrawerMessagesOpen] = useState(false);

  const openDrawerMessages = useCallback(() => {
    setDrawerMessagesOpen(true);
  }, []);

  const closeDrawerMessages = useCallback(() => {
    setDrawerMessagesOpen(false);
  }, []);

  return (
    <>
      <div className={styles.messagescontainer}>
        <div className={styles.conversationheader}>
          <b className={styles.cameron}>Cameron</b>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector1.svg"
            onClick={openDrawerMessages}
          />
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
            <input
              className={styles.typeAMessage}
              type="text"
              placeholder="Type a message"
            />
          </div>
          <img
            className={styles.composeNewBtn1}
            alt=""
            src="/compose-new-btn@2x.png"
          />
        </div>
      </div>
      {isDrawerMessagesOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMessages}
        >
          <DrawerMessages onClose={closeDrawerMessages} />
        </PortalDrawer>
      )}
    </>
  );
};

export default MessagesContainer;
