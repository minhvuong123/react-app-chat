import styled from 'styled-components';
import { InputContainerProps, PageProps } from './styleTypes';

export const SIDEBAR_WITH = 400;

export const InputField = styled.input`
  font-family: 'Inter';
  background: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  margin: 4px 0;
`;

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#131313'};
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 12px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 18px;
  background-color: #2B09FF;
  color: #fff;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;
  transition: 500ms background-color ease;
  &:focus {
    cursor: pointer;
    background-color: #4f34ff;
  };
  &:hover {
    cursor: pointer;
    background-color: #3010ff;
  };
  &:active {
    background-color: #3a1cff;
  };
`;

export const Page = styled.div<PageProps>`
  height: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$justifyContent};
`;

export const ConversationSideBarStyle = styled.aside`
  background-color: #1a1a1a;
  height: 100%;
  width: ${SIDEBAR_WITH}px;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 1px solid #434242;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
    // width: 10px;
    // height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    // background-color: #2d2d2d;
  }
`;

export const ConversationSidebarHeader = styled.header`
  position: fixed;
  width: ${SIDEBAR_WITH}px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: #151515;
  height: 100px;
  border-bottom: 1px solid #5454543d
  & h1 {
    font-weight: 400;
  }
`

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WITH}px;
  background-color: #1a1a1a;
`;

export const ConversationSidebarContainer = styled.div`
  
`;

export const ConversationSidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 30px;
  border-bottom: 1px solid #5454543d;
  background-color: #131313;
`;

export const OverlayStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #0000008a;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalContainerStyle = styled.div`
  background-color: #121212;
  width: 650px;
`;

export const ModalHeaderStyle = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h2 {
    font-weight: 500;
    margin: 0;
    margin-top: 24px;
  }
`;

export const ModalContentBodyStyle = styled.div`
  padding: 24px;
`;

export const TextField = styled.textarea`
  font-family: 'Inter';
  background: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  margin: 4px 0;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;