import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>
          MedExpress Genovia is dedicated to providing allergy relief for
          Genovian Pear allergies.
        </p>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <p>Email: info@medexpress-genovia.com</p>
        <p>Phone: +125 756 7890</p>
      </div>
    </footer>
  );
};

export default Footer;
