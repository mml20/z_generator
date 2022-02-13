import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p>
            <Link to="/generator" className="button1"><div className="button">Сгенерировать валентинку</div></Link>
        </p>
      </header>

    </div>
  );
}

export default App;
