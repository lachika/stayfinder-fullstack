import React, { useState, useEffect } from 'react';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');

 
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const loadRazorpay = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(amount) }),
      });

      const data = await res.json();

      const options = {
        key: 'rzp_test_DspeCZC6fnARa6',
        amount: data.amount,         // already in paisa from backend
        currency: data.currency,
        order_id: data.id,
        name: 'StayFinder',
        description: 'Room Booking Payment',
        handler: function (response) {
          alert(' Payment successful!');
          console.log('Payment ID:', response.razorpay_payment_id);
        },
        prefill: {
          name: 'Lachika',
          email: 'lachika@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#4CAF50',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on('payment.failed', function (response) {
        alert(' Payment failed: ' + response.error.description);
        console.error(response.error);
      });
    } catch (err) {
      alert('Payment failed due to network/backend error');
      console.error(err);
    }
  };

  return (
    <div className="payment-container">
      <h2>Complete Your Booking</h2>
      <input
        type="number"
        placeholder="Enter amount in ₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={loadRazorpay}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
