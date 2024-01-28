import React from 'react';
import MessageItem from './MessageItem/MessageItem';

const MessageBlog:React.FC = () => {
    return (
        <>
       <div className="messageBlog">
           <h3>Messages</h3>
           <MessageItem/>
       </div>
        </>
    );
};

export default MessageBlog;