import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageForm from './components/MessageForm/MessageForm';
import MessageBlog from './components/MessageBlog/MessageBlog';

function App() {

  return (
    <>
      <div className="bg-light">
        <div className="container text-center">
          <h1 className="p-2 mb-3 fw-normal">Messenger</h1>
        </div>
      </div>

        <MessageForm/>
        <MessageBlog/>
    </>
  )
}

export default App;
