import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-distributed">

        <div className="container">
            <div className="footer-left">
                <h3>About<span>Ghurbo</span></h3>

                <p class ="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">Blog</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Contact</a>
                </p>

                <p class ="footer-company-name">© 2022 copyright by Ghurbo</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>309 - Banani Dhaka,
                        Bldg. No. A - 1, Sector - 1</span>
                        Dahaka, Bangladesh</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+017XXXXXX</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@eduonix.com">support@ghurbo.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    We offer to tour some beoutifule palces so have a trip with us</p>
                <div className="footer-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;