import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Form submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
