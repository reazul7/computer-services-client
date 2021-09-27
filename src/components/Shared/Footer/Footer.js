import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
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
        { name: "Jatrabari - Dhaka", link: "//google.com/map" },
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
                <div className="row">
                    <FooterCol key={1} menuTitle={"Works with"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Software" menuItems={software} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/reazul.islam.1426876/" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="mailto:reazul7777@gmail.com" target="_blank"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/reazul7/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                            <li className="list-inline-item"><a href="https://github.com/reazul7" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="my-2">Call Now</h6>
                            <button className="btn-black w-50">+8801521331127</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center py-3">
                    <p>Copyright &copy; {(new Date()).getFullYear()} <a href="https://www.linkedin.com/in/reazul7/" className="text-blue-400 font-bold">Reazul.</a> All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;