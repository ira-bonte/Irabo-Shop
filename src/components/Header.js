import React from "react";

function Header(){
    return  <header>
                <div className="logo">
                    <h1><span>Irabo</span> Shop</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="button">
                    <a href="#"><button>Buy Now</button></a>
                </div>
            </header>
}
export default Header;