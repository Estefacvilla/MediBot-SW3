import logo from "./images/logo.jpg";
import icon_whatsapp from "./images/icon_whatsapp.png";
import "./App.css";

function App() {
  const numero = "+573005186859";
  const texto = "Hola, quiero información";
  const url = `https://wa.me/${numero}?text=${texto}`;

  return (
    <div className="home-page">
      <header className="header">
        <img src={logo} alt="Logo de MediBot" className="logo" />
        <h1>Bienvenido a MediBot</h1>
      </header>
      <main className="main">
        <p className="slogan">
          Tu asistente médico personal para agendar citas médicas de manera
          sencilla y conveniente.
        </p>
        <a aria-label="Chat on WhatsApp" href={url}>
          <img alt="Chat on WhatsApp" src={icon_whatsapp} />
        </a>
      </main>
      <footer className="footer">
        <p>¡Cuida tu salud con MediBot!</p>
      </footer>
    </div>
  );
}

export default App;
