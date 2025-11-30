import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Nexlinc.css';

const Nexlinc = () => {
    return (
        <section id="nexlinc" className="section nexlinc-section">
            <div className="container">
                <h2 className="section-title">Nexlinc</h2>
                <p className="nexlinc-tagline">One community, Infinite possibilities</p>

                <div className="nexlinc-content">
                    <p className="nexlinc-intro">
                        <strong>Nexlinc</strong> is an idea I'm currently working on - a student-driven community designed to make every college active, connected, and opportunity-rich.
                    </p>

                    <div className="nexlinc-description">
                        <p>
                            We connect students across campuses, run high-impact events, bring inspiring speakers, and build a strong network of learners, creators, and innovators.
                        </p>
                        <p className="nexlinc-goal">
                            <strong>Our goal:</strong> Turn inactive colleges into vibrant hubs of learning, collaboration, and growth — one campus at a time.
                        </p>
                    </div>

                    <div className="nexlinc-features">
                        <ul className="features-list">
                            <li>✨ Meaningful events</li>
                            <li>🎯 Skill-building sessions</li>
                            <li>🤝 Inter-college networking</li>
                            <li>🌟 A united student community</li>
                        </ul>
                    </div>

                    <div className="nexlinc-contact">
                        <h3>Connect with Nexlinc</h3>
                        <div className="nexlinc-socials">
                            <a href="mailto:nexlinc@example.com" className="nexlinc-social-icon" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope />
                                <span>Email</span>
                            </a>
                            <a href="https://instagram.com/nexlinc" className="nexlinc-social-icon" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                                <span>Instagram</span>
                            </a>
                            <a href="https://linkedin.com/company/nexlinc" className="nexlinc-social-icon" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nexlinc;
