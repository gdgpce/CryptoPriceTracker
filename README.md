
# CryptoPriceTracker Dashboard

## Overview
CryptoPriceTracker is a simple web dashboard that fetches and displays real-time cryptocurrency prices using a public API. It shows the current value of popular cryptocurrencies like Bitcoin, Ethereum, etc. and updates automatically.

## Features
- Real-time cryptocurrency price updates.
- Easy-to-use React app.
- Fetch data from a public API (e.g., CoinGecko API).
- Displays prices for multiple cryptocurrencies.
  
## Technologies To Be Used
- **React**: JavaScript framework for building user interfaces.
- **CoinGecko API** (or any other crypto API).
- **CSS** for styling.

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/gdgpce/crypto-price-tracker.git
cd CryptoPriceTracker
```

### 2. Install dependencies
Ensure you have **Node.js** and **npm** installed. Run the following command to install necessary packages:
```bash
npm install
```

### 3. Get the API Key
- Go to the [CoinGecko API](https://www.coingecko.com/en/api) and sign up (if required).
- Read the API documentation and obtain the API endpoint for fetching cryptocurrency prices.

### 4. Create `.env` File (optional)
If the API requires an API key, create a `.env` file at the root of your project and add your API key:
```env
REACT_APP_API_URL=https://api.coingecko.com/api/v3/
```
Ensure you restart the server if you change `.env`.


### 5. Start the React app
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the CryptoPriceTracker in your browser.

## Folder Structure
```plaintext
CryptoPriceTracker/
├── public/
├── src/
│   ├── components/
│   │   └── CryptoPriceTracker.js
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
└── README.md
```


## API Documentation
The app fetches data from the CoinGecko API. For detailed documentation, visit the [CoinGecko API Docs](https://www.coingecko.com/en/api).

---

## Guidelines for React Setup

### Step-by-Step Guide:
1. **Install Create-React-App**:
   If you don’t already have a React app setup, you can create one using:
   ```bash
   npx create-react-app CryptoPriceTracker
   ```
2. **Install Axios**:
   Install the Axios library for making API requests:
   ```bash
   npm install axios
   ```
3. **Create CryptoPriceTracker Component**:
   Inside the `src/components` folder, create a `CryptoPriceTracker.js` file to manage API requests and display crypto prices.

4. **Fetching Data**:
   Use the `useEffect` React hook to fetch crypto prices from the API when the component is mounted.

5. **Display Data**:
   Map over the fetched data and display it inside an HTML element (e.g., `<ul>` or `<table>`).

6. **Styling**:
   Add CSS to style your dashboard. Keep it simple or customize the design as per your preference.

---

Happy coding! Let me know if you need any additional details.
