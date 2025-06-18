const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  startDate: Date,
  endDate: Date,
  status: { type: String, default: 'confirmed' }
});

module.exports = mongoose.model('Booking', bookingSchema);
