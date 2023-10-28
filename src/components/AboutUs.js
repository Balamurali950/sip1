import React, { useState } from 'react';

const AboutUs = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button onClick={toggleAccordion}>
        {isAccordionOpen ? 'Hide Details' : 'Show Details'}
      </button>

      {isAccordionOpen && (
        <div className="accordion-content">
          <h2>Organization Name</h2>
          <p>Tasty foods.</p>

          <h2>Address</h2>
          <p>123 Main Street,Anytown</p>
          <p>Postal Code: 12345</p>

          <h2>Location</h2>
          <p>USA.</p>

          <h2>Contact Details</h2>
          <p>Email:abc@gmail.com</p>
          <p>Phone: 1234567890</p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
