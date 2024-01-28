import React from 'react';

const MessageForm: React.FC = () => {
    return (
        <>
            <div className="container text-center">
                <form className="text-center">
                    <div className="mb-3 col-6 form-item">
                        <label htmlFor="userName" className="form-label">Введите имя: </label>
                        <input type="text" className="form-control" id="userName" placeholder="Имя"/>
                    </div>
                    <div className="mb-3 col-6 form-item">
                        <label htmlFor="userText" className="form-label">Введите сообщение:</label>
                        <textarea className="form-control" id="userText" rows="3"></textarea>
                    </div>
                    <div className="mb-3 form-item w-100" >
                        <button className='btn btn-primary' type="submit" id="btnSend">Отправить</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default MessageForm;