import React from "react";

function Header() {
  const buttonStyle = {
    cursor: "pointer",
  };

  return (
    <header>
      <div className="logo" style={buttonStyle}>
        <h1>
          <span>Irabo</span> Shop
        </h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="button">
        <a href="/">
          <button style={buttonStyle}>Buy Now</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
