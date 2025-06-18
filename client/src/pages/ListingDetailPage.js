import React from "react";
import { useParams } from "react-router-dom";
import listings from "../data/listings";
import "./ListingDetailPage.css"; 

const ListingDetailPage = () => {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === id);

  if (!listing) return <h2>Listing not found</h2>;

  return (
    <div className="listing-detail">
      <img src={listing.imageUrl} alt={listing.title} />
      <div className="info">
        <h2>{listing.title}</h2>
        <p><strong>Location:</strong> {listing.location}</p>
        <p><strong>Price:</strong> ₹{listing.price} per night</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a sample description for the listing.</p>
      </div>
    </div>
  );
};

export default ListingDetailPage;

