import React from "react";
import { Link } from "react-router-dom";
import listings from "../data/listings";
import "./HomePage.css"; // optional for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Home Page (Property Listings)</h2>
      <div className="listing-grid">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img src={listing.imageUrl} alt={listing.title} />
            <h3>{listing.title}</h3>
            <p>{listing.location}</p>
            <p><strong>₹{listing.price}</strong> / night</p>
            <Link to={`/listing/${listing.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
