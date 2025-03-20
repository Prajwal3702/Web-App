import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to Communion App</h2>
          <p>
            Communion is dedicated to connecting people of all faiths through
            events and community support. Our platform enables individuals to
            discover, create, and participate in events that celebrate
            diversity, foster understanding, and build community bonds. Whether
            you're looking for religious gatherings, social meetups, or charity
            opportunities, Communion is here to bring people together.
          </p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Communion App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
