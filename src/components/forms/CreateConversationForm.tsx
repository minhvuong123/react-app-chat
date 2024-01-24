import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";

export const CreateConversationForm = () => {
  return (
    <form className={styles.createConversationForm}>
      <section>
        <InputContainer $backgroundColor="#161616">
          <InputLabel>Recipient</InputLabel>
          <InputField />
        </InputContainer>
      </section>
      <section className={styles.message}>
        <InputContainer $backgroundColor="#161616">
          <InputLabel>Message (optional)</InputLabel>
          <InputField />
        </InputContainer>
      </section>
      <Button>Create Conversation</Button>
    </form>
  );
};
