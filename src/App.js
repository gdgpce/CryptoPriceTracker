import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import { CryptoPriceTracker } from './components/CryptoPriceTracker';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <CryptoPriceTracker/>
    </div>
  );
}

export default App;
