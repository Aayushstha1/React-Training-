import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName , address, setAddress, phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Form submitted: ${name , address, phone}`);
  };

  return (
   <div>
   <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> <br />
       <br />
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      /> <br />
       <br />
      <input
        type="text"
        placeholder="Enter your Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      /> <br />
        <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
export default ContactForm;