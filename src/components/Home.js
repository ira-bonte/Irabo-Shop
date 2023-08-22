import React from "react";
import {FaDiscord, FaFacebook, FaInstagram, FaMicrosoft, FaSlack, FaSnapchat, FaStar, FaTelegram, FaTicketAlt, FaTwitter} from "react-icons/fa";

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
                       <div className="our">
                           Our sponser 
                       </div>
                       <div className="spon">
                        <FaDiscord/> Discord
                        <FaTelegram/>Telegram
                        <FaSnapchat/>Snapchat
                        <FaMicrosoft/>Microsoft
                        <FaSlack/> Slack 
                       </div>
                    </div>
                </section>
                <section id="about">
                 <div className="aboutphoto">
                    <div className="onus">
                      <div className="us">
                         About us
                      </div>
                    <div className="more">
                            <p>Irabo started in 2023 and was found by something I don't know. We give and deliver to you furniture you bought on our website and things like that <span>read more...</span></p>   
                    </div>
                  </div>
                  {/* <div className="photo1">
                    <img src={require('../images/aboutus.jpg')} alt="about us"></img>
                    <img src={require('../images/onus.jpg')} alt="on us"></img> */}
                  {/* </div> */}
                 </div>
                </section>
                <section id="choose">
                    <div className="choosing">
                       <p> Why choose us?</p>
                       <p>Vous etes assurer de nous choisir parce-que nous avons de bonne produits pour vous donner et vous ne sera pas decu.</p>
                    </div>
                </section>
                <section id="boxes">
                <div className="box1">
                        <FaStar/>
                        <div className="texts">
                        <h5>Quality</h5>
                        <p>The Quality of our products and nibind nkiby nyn ntbg bir hasii 2 nyn birarenz nkuk mubibon byonyn ni ibya mberee wllh!</p>
                      </div>
                    </div>
                    <div className="box2">
                        <FaTicketAlt/>
                        <div className="text">
                        <h5>Quality</h5>
                        <p>The Quality of our products and nibind nkiby nyn ntbg bir hasii 2 nyn birarenz nkuk mubibon byonyn ni ibya mberee wllh!</p>
                      </div>
                    </div>
                </section>
            </main>
}
export default Home;