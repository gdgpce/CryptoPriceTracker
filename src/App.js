 
import React, { useState, useEffect } from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import CryptoList from './components/CyptoList';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
        );
        const data = await res.json();
        setCryptos(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
      setLoading(false);
    };

    fetchData();

    const interval = setInterval(fetchData, 10000); // Refresh every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />  
      <h1>Crypto Price Tracker</h1>
      {loading ? <p>Loading...</p> : <CryptoList cryptos={cryptos} />}
    </div>
  );
}

export default App;
