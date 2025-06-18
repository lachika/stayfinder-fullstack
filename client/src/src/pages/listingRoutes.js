const express = require('express');
const Listing = require('../models/Listing');
const router = express.Router();

// Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().populate('host', 'name');
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single listing
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('host', 'name');
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create listing
router.post('/', async (req, res) => {
  try {
    const listing = new Listing(req.body);
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
