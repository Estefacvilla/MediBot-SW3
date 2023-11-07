import logo from './logo.svg';
import './App.css';

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
