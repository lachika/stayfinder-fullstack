const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);         // Auth routes: register/login
app.use('/api/payment', paymentRoutes);   // Payment route


// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/stayfinder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' MongoDB connected');
  
  // Start server only after DB is connected
  app.listen(3001, () => {
    console.log(' Server running on http://localhost:3001');
  });
})
.catch((err) => {
  console.error(' MongoDB connection error:', err);
});
