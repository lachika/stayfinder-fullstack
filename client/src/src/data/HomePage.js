import React from "react";
import { Link } from "react-router-dom";
import listings from "../data/listings"; // <-- this imports the mock data
import "./HomePage.css"; // optional, for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>StayFinder - Explore Properties</h1>
      <div className="listings-grid">
        {listings.map((listing) => (
          <div key={listing.id} className="card">
            <img src={listing.imageUrl} alt={listing.title} />
            <div className="card-body">
              <h3>{listing.title}</h3>
              <p>{listing.location}</p>
              <p>₹{listing.price} / night</p>
              <Link to={`/listing/${listing.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
