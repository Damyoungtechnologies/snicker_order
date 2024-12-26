import React from 'react';
import './Hero.css';
import { Product, Description } from './components';

const Hero = ({ onAddToCart }) => {
  return (
    <div className="hero">
      <div className="left_hero">
        <Product />
      </div>
      {/* Pass the cart update function to Description */}
      <div className="right_hero">
        <Description onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default Hero;
