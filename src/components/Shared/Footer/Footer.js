import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {

    const noNamed = [
        { name: "Desktop Services", link: "/services" },
        { name: "Laptop Services", link: "/services" },
        { name: "Monitor Repair", link: "/services" },
        { name: "HDD/SDD Data recover", link: "/services" },
        { name: "Home support", link: "/services" },
    ]
    const ourAddress = [
        { name: "New Poltan - Dhaka", link: "//google.com/map" },
        { name: "Bangladesh", link: "//google.com/map" },

    ]
    const software = [
        { name: "Deleted Data Recover", link: "/services" },
        { name: "Original Windows Key", link: "/services" },
        { name: "HDD Health Check Up", link: "/services" },
        { name: "Troubleshoot Problem Solve", link: "/services" },
        { name: "HDD Health Recover", link: "/services" }
    ]
    const services = [
        { name: "Emergency Data Recovery", link: "/services" },
        { name: "Desktop Build", link: "/services" },
        { name: "PC Parts buying guide", link: "/services" },
        { name: "Custom PC Build", link: "/services" }
    ]


    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Software" menuItems={software} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call Now</h6>
                            <button className="btn-black w-50">01521331127</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;