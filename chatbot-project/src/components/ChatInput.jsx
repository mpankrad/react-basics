import { useState} from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages}) {

        const [inputText, setInputText] = useState('');
        const [isLoading, setLoading] = useState(false);

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        async function sendMessage() {  //updater function

           if (!inputText.trim()) return; //prevent empty sends

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            }
          ];


          setChatMessages(newChatMessages);
          setLoading(true);

//response
          //for placeholder response Loading
          function isLoadingFunc() {
          const placeResponse = 'Loading...';
           setChatMessages([
            ...newChatMessages,
            {
              message: placeResponse,
              sender: 'robot',
              id: crypto.randomUUID()
            }]);
          }

            isLoadingFunc();
            setLoading(true);

           const response = await Chatbot.getResponseAsync(inputText);
                
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
          setLoading(false);
          setInputText('');
        }

        return (
          <div className = "chat-input-container">
            <input className= "chat-input"
              placeholder="Send a message to Chatbot"
              size="30"
              onKeyDown = { (event) => {
                if (event.key === 'Enter') {
                  sendMessage();
                  setInputText('');
                }
                else if (event.key === 'Escape') {
                  setInputText('');
                }
              }}
              onChange={saveInputText}
              value={inputText} //controlled input
            />
            <button 
              className = "send-button"
              onClick={() =>{
                if (!isLoading) {
                  sendMessage();
                  setInputText('');
                };
              }}
              disabled = {isLoading}
            >Send</button>
          </div>
        );
      }