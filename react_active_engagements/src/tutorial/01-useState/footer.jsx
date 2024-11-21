import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer_Theme.css';

const Footer_Theme = ({ logo, about, socialLinks, services }) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-logo">
                    <img src={logo} alt="Organization Logo" />
                </div>

                {/* About Section */}
                <div className="footer-about">
                    <h4>About</h4>
                    <ul>
                        {Object.entries(about).map(([title, link], index) => (
                            <li key={index}>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Section */}
                {services && (
                    <div className="footer-services">
                        <h4>Services</h4>
                        <ul>
                            {services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Social Media Section */}
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="footer-icons">
                        {socialLinks.github && (
                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                            </a>
                        )}
                        {socialLinks.instagram && (
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        )}
                        {socialLinks.facebook && (
                            <a
                                href={socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Back-to-Top Button */}
            <div className="footer-back-to-top">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Back to Top
                </button>
            </div>
        </footer>
    );
};

Footer_Theme.propTypes = {
    logo: PropTypes.string.isRequired,
    about: PropTypes.object.isRequired,
    socialLinks: PropTypes.shape({
        github: PropTypes.string,
        instagram: PropTypes.string,
        facebook: PropTypes.string,
    }).isRequired,
    services: PropTypes.array,
};

export default Footer_Theme;
