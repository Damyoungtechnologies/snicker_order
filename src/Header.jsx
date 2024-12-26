import React, { useState } from 'react';
import './Header.css';
import { profile_pix } from './Assets';
import Mobile from './Mobile';
import Hero from './Hero';

function Header() {
  const [mobile, setMobile] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  function dropdown() {
    setMobile(!mobile);
  }

  // Update the cart count when items are added
  const handleAddToCart = (count) => {
    setCartCount((prev) => prev + count);
  };

  return (
    <div className="top">
      <header className="header">
        <div className="header_link1">
          <span className="menu" onClick={dropdown}>
            {mobile ? (
              <span className="hide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"
                  />
                </svg>
              </span>
            ) : (
              <span className="show">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1536"
                  height="1280"
                  viewBox="0 0 1536 1280"
                >
                  <path
                    fill="currentColor"
                    d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45m0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45m0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45"
                  />
                </svg>
              </span>
            )}
          </span>
          <h2>Sneaker</h2>
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="header_link2">
          <span className="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
              />
            </svg>
            <span className={cartCount > 0 ? 'noteIcon' : null}>{cartCount === 0 ? null : cartCount}</span>
          </span>
          <img src={profile_pix} alt="Profile" />
        </div>
      </header>
      {/* This is the dropdown for mobile */}
      {mobile ? <Mobile /> : null}
      {/* Pass the cart handler to Hero */}
      <Hero onAddToCart={handleAddToCart} />
    </div>
  );
}

export default Header;
