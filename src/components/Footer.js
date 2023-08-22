import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer(){
    return  <footer>
                <div className="links">
                    <div className="logo">
                        <h1><span>Irabo</span> Shop</h1>
                    </div>
                    <div className="link">
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="home.html">About Us</a></li>
                            <li><a href="home.html">Products</a></li>
                            <li><a href="home.html">FAQ</a></li>
                            <li><a href="home.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copy">
                    <div className="copyright">
                        <h3>&copy; 2023 Irabo Shop.</h3>
                    </div>
                    <div className="socials">
                        <div className="content">
                            <p>Imprint</p>
                            <p>Privacy</p>
                        </div>
                        <div className="icons">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </footer>
}
export default Footer;