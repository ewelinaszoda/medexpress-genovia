import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/medexpress_logo.webp"
          alt="MedExpress Genovia Logo"
          className="logo"
        />
        <h1 className="title">MedExpress Genovia</h1>
      </div>
    </header>
  );
};

export default Header;
