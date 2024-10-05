import logo from './logo.svg';
import './App.css';
import { CryptoPriceTracker } from './components/CryptoPriceTracker';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
        <Navbar />
    <CryptoPriceTracker/>
    </div>
  );
}

export default App;
