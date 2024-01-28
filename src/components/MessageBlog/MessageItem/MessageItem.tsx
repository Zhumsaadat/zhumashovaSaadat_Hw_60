import React from 'react';
import { Message } from '../../../../types';
import dayjs from 'dayjs';

interface Props  {
    message: Message
}

const MessageItem: React.FC<Props> = ({message}) => {
    const data = dayjs(message.datetime).format('DD.MM.YYYY HH:mm')

    return (
        <>
            <div className="border border-black p-2 m-2">
                <div className="toast-header">
                    <strong className="me-auto">{message.author}</strong>
                    <small className="text-muted">{data}</small>
                </div>
                <hr/>
                <div className="toast-body">
                    {message.message}
                </div>
            </div>

        </>
    );
};

export default MessageItem;