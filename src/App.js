import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MediBot
        </p>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
          />
          <button>Send</button>
        </div>
      </header>
    </div>
  );
}

export default App;
