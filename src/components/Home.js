import React from "react";
import {FaDiscord, FaFacebook, FaInstagram, FaMicrosoft, FaPeopleArrows, FaRProject, FaRainbow, FaSlack, FaSnapchat, FaStar, FaTelegram, FaTicketAlt, FaTwitter, FaViber} from "react-icons/fa";

function Home(){
    return  <main>
                <section id="landing">
                    <img src={require('../images/landingImage.jpg')} alt="Landing Imag"></img>
                    <div className="cards">
                        <div className="card">
                            <h1>Make your place a <span>better living</span></h1>
                            <p>Urban crafty furniture with modern, simple and elegant designs for your home.</p>
                            <a href="home.html"><button>Buy Now</button></a>
                        </div>
                        <div className="icons">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                </section>
                <section id="sponsers">
                    <div className="every"> 
                       <div className="title">
                            <h1>Our sponser</h1>
                       </div>
                       <div className="card">
                        <FaDiscord/> 
                        <FaTelegram/>
                        <FaSnapchat/>
                        <FaMicrosoft/>
                        <FaSlack/>  
                       </div>
                    </div>
                </section>
                <section id="about">
                    <div className="content">
                        <div className="title">
                            <h1>about us</h1>
                       </div>
                       <p>this is iradukunda bonte this is iradukunda bonte this is iradukunda bonte this is iradukunda bonte <a href="home.js">read more...</a></p>
                    </div>
                    <div className="images">
                        <img src={require('../images/aboutus.jpg')}></img>
                        {/* <img src={require('../images/onus.jpg   ')}></img> */}
                    </div>
                </section>
            </main>
}
export default Home;