import { ConversationSideBarStyle, ConversationSidebarContainer, ConversationSidebarHeader, ConversationSidebarItem } from "../../utils/styles"
import { TbEdit } from 'react-icons/tb';
import { ConversationType } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import styles from './index.module.scss';

type Props = {
  conversations: ConversationType[];
}

export const ConversationSidebar: React.FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();

  return <ConversationSideBarStyle>
    <ConversationSidebarHeader>
      <h1>Conversations</h1>
      <TbEdit size={32} />
    </ConversationSidebarHeader>
    <ConversationSidebarContainer>
      {conversations.map((conversation) => {
        return (
          <ConversationSidebarItem onClick={() => navigate(`/conversations/${conversation.id}`)}>
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>{conversation.name}</span>
              <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
            </div>
          </ConversationSidebarItem>
        )
      })}
    </ConversationSidebarContainer>
  </ConversationSideBarStyle>
}