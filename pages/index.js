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
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
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
