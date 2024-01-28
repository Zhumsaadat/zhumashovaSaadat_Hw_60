import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import { Message } from '../../../types';

interface Props {
    messages: Message[];
}

const MessageBlog:React.FC<Props> = ({messages}) => {
    return (
        <>
       <div className="messageBlog">
           <h3>Messages</h3>
           {messages.map((message, index) => {
              return <MessageItem key={index} message={message}/>
           })}
       </div>
        </>
    );
};

export default MessageBlog;