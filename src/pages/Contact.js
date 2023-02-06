import React from 'react';
import '../style/pages/Contact.scss';
import Logo from '../assets/multiplePizzas.jpeg';
import { useState } from 'react';

function Contact(props) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (event) => {
    if (event.target.value === '' || isValidEmail(event.target.value)) {
      setError(null);
      setEmail(event.target.value);
    } else {
      setError('Email is invalid');
    }

    setEmail(event.target.value);
  };

  const handleCLick = (e) => {
    e.preventDefault();
    props.getEmail(email);
  };

  return (
    <div className="contact" style={{ backgroundImage: `url( ${Logo})` }}>
      <span className="title">Email for us</span>
      <span className="title-email">PizzaHut@gmail.com</span>

      <form className="contact-form">
        <input
          type="email"
          placeholder="enter your email right here"
          value={email}
          onChange={handleChange}
        />
        <button onClick={handleCLick}>Submit</button>
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      </form>
    </div>
  );
}
export default Contact;
