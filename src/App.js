import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [password, setPassword] = useState('');
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000); // Actualiza la hora cada segundo

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);
  
  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';
    
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    const passwordLength = 12;
    
    let newPassword = '';
    
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }
    
    setPassword(newPassword);
  };

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Clock">
          <p>{currentTime}</p>
        </div>
        <h1>Mi Generador de Contraseñas</h1>
        <p>¡Genera contraseñas seguras con un solo clic!</p>
        <button className="Generate-button" onClick={generatePassword}>Generar Contraseña</button>
        <input
          type="text"
          id="password"
          value={password}
          readOnly
          placeholder="Contraseña generada"
        />
      </header>
    </div>
  );
}

export default App;
