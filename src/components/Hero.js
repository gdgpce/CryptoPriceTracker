import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Largest Crypto Marketplace</h1>
                <p>Welcome to the world’s largest cryptocurrency marketplace. <br />Sign up to explore more about cryptos.</p>
                <div className="search-bar">
                    <input type="text" placeholder="Search crypto.." />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
