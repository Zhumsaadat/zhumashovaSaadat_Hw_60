import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageForm from './components/MessageForm/MessageForm';
import MessageBlog from './components/MessageBlog/MessageBlog';
import { Message } from '../types';

function App() {
        const [messages, setMessages] = useState([]);
        const url = 'http://146.185.154.90:8000/messages';

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(url);
                if (response.ok) {
                    const messagesDate: Message[] = await response.json();
                    setMessages(messagesDate);
                }
            };
        void  fetchData();
    }, []);


  return (
    <>
      <div className="bg-light">
        <div className="container text-center">
          <h1 className="p-2 mb-3 fw-normal">Messenger</h1>
        </div>
      </div>

        <MessageForm/>
        <MessageBlog messages={messages}/>
    </>
  )
}

export default App;
