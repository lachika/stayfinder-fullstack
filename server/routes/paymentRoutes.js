const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

const razorpay = new Razorpay({
  key_id: 'rzp_test_DspeCZC6fnARa6',        
  key_secret: 'B1eoBMBbSU2aHyiJgG69hxag',    
});

router.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  

  try {
    const options = {
      amount: amount * 100, 
      currency: 'INR',
      receipt: 'order_rcptid_' + Math.floor(Math.random() * 10000),
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create Razorpay order' });
  }
});
const Booking = require('../models/Booking'); 

router.post('/confirm-booking', async (req, res) => {
  try {
    const {
      userId,
      propertyId,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      amount,
    } = req.body;

    const booking = await Booking.create({
      user: userId,
      propertyId,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      amount,
    });

    res.status(201).json({ message: 'Booking confirmed', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to confirm booking' });
  }
});


module.exports = router;
