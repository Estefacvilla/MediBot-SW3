
import logo from './logo.svg';
import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Chatbot from './Chatbot';

function App() {
  const numero = "+573005186859";
  const texto = "Hola, quiero información";
  const url = `https://wa.me/${numero}?text=${texto}`;

  return (
    <div>
      <Navbar />
      <Body />
      <Chatbot />
    </div>
  );
}
export default App;
