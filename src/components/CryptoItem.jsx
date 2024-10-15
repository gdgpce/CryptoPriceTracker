 
import React from 'react';

function CryptoItem({ crypto }) {
  return (
    <tr>
      <td>{crypto.market_cap_rank}</td>
      <td className='crypto'>
        <img src={crypto.image} alt={crypto.name} width="25" />
        {crypto.name}
      </td>
      <td>${crypto.current_price.toFixed(2)}</td>
      <td className={crypto.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>${crypto.market_cap.toLocaleString()}</td>
    </tr>
  );
}

export default CryptoItem;
