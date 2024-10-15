 
export const getCryptos = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
  );
  const data = await res.json();
  return data;
};
