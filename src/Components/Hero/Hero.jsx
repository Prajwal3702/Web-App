import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Discover and join events that celebrate diversity, foster understanding, and build community. Communion brings people together through shared experiences.</p>
        <Link to="/events" className="cta-button">Explore Events</Link>
      </div>
    </section>
  );
}

export default Hero;