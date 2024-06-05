import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const clickEntrar = (e) => {
    if (name.trim() !== '') {
    navigate ("/chat", {state:{username: name}});
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
          <div className="mb-4">
            <label htmlFor="name" className="flex justify-center text-gray-700 text-sm font-bold mb-2" >
              Digite seu nome
            </label>
            <input 
              id="name"
              type="text"
              placeholder="Digite seu nome"
              className=" border rounded w-full py-2 px-3 text-gray-700"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={clickEntrar}
            > 
              Entrar 
            </button>
          </div>
       
      </div>
    </div>
  );
}

export default LoginPage;
