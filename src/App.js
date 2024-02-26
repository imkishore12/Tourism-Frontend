import logo from './logo.svg';
import './App.css';
// import Routes from './Routes/Routing';
import { NavLink } from 'react-router-dom';
import Navbar from './Route/Navbar';
import Routing from './Route/Routing';
import Footer from './Route/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routing/>
      <Footer />
      
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
