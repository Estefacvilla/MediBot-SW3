import React, { useState, useEffect } from 'react'; // Importa React y funciones useState y useEffect desde la biblioteca 'react'
import './App.css'; // Importa estilos CSS desde el archivo 'App.css'
import logo from './logo.svg'; // Importa una imagen desde 'logo.svg'

function App() {
  // Define dos estados usando el hook useState
  const [password, setPassword] = useState(''); // El estado 'password' para almacenar la contraseña generada
  const [currentTime, setCurrentTime] = useState(getCurrentTime()); // El estado 'currentTime' para almacenar la hora actual

  // Utiliza el hook useEffect para realizar efectos secundarios en el componente
  useEffect(() => {
    // Crea un intervalo que actualiza la hora cada segundo y almacena el ID del intervalo en 'interval'
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime()); // Actualiza el estado 'currentTime' con la hora actual
    }, 1000); // Se ejecuta cada 1000 milisegundos (1 segundo)

    // Define una función de limpieza que se ejecutará cuando el componente se desmonte
    return () => clearInterval(interval); // Limpia el intervalo para evitar fugas de memoria
  }, []);

  // Función para generar una contraseña segura
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

    setPassword(newPassword); // Actualiza el estado 'password' con la nueva contraseña generada
  };

  // Función para obtener la hora actual en formato HH:MM:SS
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Obtiene las horas en formato de dos dígitos
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Obtiene los minutos en formato de dos dígitos
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Obtiene los segundos en formato de dos dígitos
    return `${hours}:${minutes}:${seconds}`; // Devuelve la hora formateada
  }

  // Renderiza el contenido del componente
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Clock">
          <p>{currentTime}</p> {/* Muestra la hora actual */}
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

export default App; // Exporta el componente 'App' para su uso en otros lugares de la aplicación
