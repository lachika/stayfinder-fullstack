import React from 'react';

const PaymentPage = () => {
  const loadRazorpay = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 500 }), // ₹5.00
      });

      const data = await res.json();

      const options = {
        key: 'rzp_test_DspeCZC6fnARa6', 
        amount: data.amount,
        currency: data.currency,
        name: 'StayFinder',
        description: 'Test Transaction',
        order_id: data.id,
        handler: function (response) {
          alert('Payment successful: ' + response.razorpay_payment_id);
        },
        prefill: {
          name: 'Lachika',
          email: 'lachika@example.com',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert('Failed to fetch payment order');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Make Payment</h2>
      <button onClick={loadRazorpay}>Pay ₹5</button>
    </div>
  );
};

export default PaymentPage;
