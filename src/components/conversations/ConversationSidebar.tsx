import { ConversationSideBarStyle, ConversationSidebarContainer, ConversationSidebarHeader, ConversationSidebarItem } from "../../utils/styles"
import { TbEdit } from 'react-icons/tb';
import { ConversationType } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import styles from './index.module.scss';
import { useState } from "react";
import { CreateConversationModal } from "../modals/CreateConversationModal";

type Props = {
  conversations: ConversationType[];
}

export const ConversationSidebar: React.FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      { showModal && <CreateConversationModal setShowModal={setShowModal} /> }
      <ConversationSideBarStyle>
        <ConversationSidebarHeader>
          <h1>Conversations</h1>
          <div onClick={() => setShowModal(!showModal)}>
            <TbEdit size={32} />
          </div>
        </ConversationSidebarHeader>
        <ConversationSidebarContainer>
          {conversations.map((conversation) => {
            return (
              <ConversationSidebarItem key={conversation.id} onClick={() => navigate(`/conversations/${conversation.id}`)}>
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
    </>
  )
}