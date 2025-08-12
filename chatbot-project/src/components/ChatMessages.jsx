import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

 function ChatMessages({ chatMessages }) {

        const chatMessagesRef = useRef(null); //container with react features
        
         useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;  //auto-scroll
          }
        }, [chatMessages] ); //dependency array (control when hook runs)
        
        return (
          <div 
            className = "chat-messages-container"
            ref = {chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

      export default ChatMessages;