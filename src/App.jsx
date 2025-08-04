import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const heartsContainer = document.querySelector('.hearts-container');

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

      heart.addEventListener('animationend', () => {
        heart.remove();
      });

      heartsContainer.appendChild(heart);
     
    }

    function startHearts() {
      setInterval(createHeart, 300);
    }

    // Run hearts when the component loads
    startHearts();
  }, []);

  return (
    <div className="app-container">
      {/* Floating hearts */}
      <div className="hearts-container"></div>

      {/* Main Content */}
      <div className="love-letter">
        <h1>To My Love</h1>
        <p>
          Every moment with you is like a beautiful dream come true. 💖
        </p>
        <p>
          Thank you for being my light, my warmth, and my peace. You make every
          ordinary day magical, and every moment unforgettable.
        </p>
        <p>Forever yours,</p>
        <p className="signature">— Ari</p>
      
      </div>
    </div>
  );
}

export default App;
