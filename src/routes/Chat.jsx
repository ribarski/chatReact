import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Message({ user, message }) {
  const alignClass = user === 'Você' ? 'text-right' : 'text-left';

  return (
    <div className={`message-item ${alignClass}`}>
      <div className="msg-user"><strong>{user} diz:</strong></div>
      <div className="msg-chat">{message}</div>
    </div>
  );
} 

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  let location = useLocation();
  const username = location.state && location.state.username;
  console.log(username)



  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].user === 'Você') {
      setTimeout(() => {
        setMessages([
          ...messages,
          { user: 'Atendente', message: 'BLALBABALBALAB' }
        ]);
      }, 1000);
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
    setMessages([...messages, { user: 'Você', message: inputMessage }]);
    setInputMessage('');
    }
  };
  
  return (
      <div className="relative h-screen">
      <div className="absolute top-0 left-0 m-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar
        </Link>
      </div>


    <div className="flex justify-center items-center h-screen">
      <div className="border-solid border p-4 max-w-md rounded-md">

        <header className="text-violet-800 text-center">
          <h2>Atendimento Online - {username}</h2>
        </header>


        <div className="messages-list bg-gray-200 p-4 rounded-md h-80 overflow-y-auto">
          {messages.map((msg, index) => (
            <Message key={index} user={msg.user} message={msg.message} />
          ))}
        </div>


        <form onSubmit={handleSubmit} className="flex gap-5">
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Digite aqui sua mensagem..."
            value={inputMessage}
            onChange={handleInputChange}
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
          <button type="submit" className="bg-white rounded-lg mt-5 px-6 py-3 border-solid border border-gray-300">ENVIAR</button>
        </form>



      </div> 
    </div>
    </div>
  );
}
