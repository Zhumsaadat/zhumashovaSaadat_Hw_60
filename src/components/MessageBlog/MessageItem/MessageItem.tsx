import React from 'react';

const MessageItem: React.FC = () => {
    return (
        <>
            <div className="border border-black p-2">
                <div className="toast-header">
                    <strong className="me-auto">автор</strong>
                    <small className="text-muted">дата</small>
                </div>
                <hr/>
                <div className="toast-body">
                    смс
                </div>
            </div>

        </>
    );
};

export default MessageItem;