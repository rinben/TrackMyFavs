import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home">
      <h1>Welcome to TrackMyFavs</h1>
      <p>Your personalized media recommendation and tracking platform.</p>
      <a href="/catalog">Explore the Catalog</a>
    </div>
  );
}

export default Home;
