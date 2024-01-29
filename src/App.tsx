import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageForm from './components/MessageForm/MessageForm';
import MessageBlog from './components/MessageBlog/MessageBlog';
import { Message } from '../types';

function App () {
        const [messages, setMessages] = useState([]);
        const url = 'http://146.185.154.90:8000/messages';
        let lastDate = '';

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(url);
                if (response.ok) {
                    const messagesDate: Message[] = await response.json();
                    await setMessages(messagesDate);
                    lastDate = messagesDate[messagesDate.length - 1].datetime;
                }
            };
        void  fetchData();
            const intervalId = setInterval(async () => {
                try {
                    let lastMessageUrl = 'http://146.185.154.90:8000/messages?datetime=' + lastDate;
                    const response = await fetch(lastMessageUrl);
                    if (response.ok) {
                        const newMessageArray = await response.json();

                        if (newMessageArray.length !== 0 && newMessageArray.length !== undefined) {
                            setMessages(prevState => {
                                return [...prevState, ...newMessageArray];
                            } )
                            lastDate = newMessageArray.datetime;
                        }
                    };

                } catch (e) {
                    alert('Ошибка при периодической загрузке сообщений. Error: ' + e);
                }
            }, 5000);
            return () => clearInterval(intervalId);
    }, []);



    return (
    <>
      <div className="bg-light">
        <div className="container text-center">
          <h1 className="p-2 mb-3 fw-normal">Messenger</h1>
        </div>
      </div>

        <MessageForm messages={messages}/>
        <MessageBlog messages={messages}/>
    </>
  )
}

export default App;
