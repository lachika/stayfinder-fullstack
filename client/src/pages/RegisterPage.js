import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';


const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '', email: '', password: ''
  });

  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault(); 
    try {
      const res = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.name,
          email: form.email,
          password: form.password
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("Registration successful!");
        navigate('/login'); // 
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Register</button> {/*  use type="submit" */}
      </form>
    </div>
  );
};

export default RegisterPage;
