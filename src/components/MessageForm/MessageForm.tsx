import React, { useState } from 'react';
import { Message } from '../../../types';

interface Props {
    message: Message;
}


const MessageForm: React.FC<Props> = ({ message }) => {
    const [userName, setUserName] = useState('');
    const [userText, setUserText] = useState('');
    const url = 'http://146.185.154.90:8000/messages';

    const changeMessage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        if (name === 'author') {
            setUserName(value);
        } else if (name === 'message') {
            setUserText(value);
        };
    };

    const sendMessage = (e: React.FormEvent): void => {
        e.preventDefault();
        const body = new URLSearchParams();

        body.append('author', userName);
        body.append('message', userText);
        try {
            fetch(url, { method: 'POST', body }).then();
        } catch (e) {
            alert('Ошибка при отправке данных. Error: ' + e);
        }

        setUserName('');
        setUserText('');
    };

    return (
        <>
            <div className="container text-center">
                <form onSubmit={sendMessage} className="text-center">
                    <div className="mb-3 col-6 form-item">
                        <label htmlFor="userName" className="form-label">
                            Введите имя:
                        </label>
                        <input
                            value={userName}
                            type="text"
                            name="author"
                            className="form-control"
                            id="userName"
                            placeholder="Имя"
                            onChange={changeMessage}
                        />
                    </div>
                    <div className="mb-3 col-6 form-item">
                        <label htmlFor="userText" className="form-label">
                            Введите сообщение:
                        </label>
                        <textarea
                            value={userText}
                            name="message"
                            className="form-control"
                            id="userText"
                            rows={3}
                            onChange={changeMessage}
                        ></textarea>
                    </div>
                    <div className="mb-3 form-item w-100">
                        <button className="btn btn-primary" type="submit" id="btnSend">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MessageForm;