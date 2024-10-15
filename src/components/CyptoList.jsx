 
import React from 'react';
import CryptoItem from './CryptoItem';

function CryptoList({ cryptos }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map(crypto => (
            <CryptoItem key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoList;
