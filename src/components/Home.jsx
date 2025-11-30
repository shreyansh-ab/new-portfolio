import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="section home-section">
            <div className="container">
                <div className="home-content">
                    <div className="home-text animate-fadeInUp">
                        <p className="home-greeting">Hi there, I'm</p>
                        <h1 className="home-name">Shreyansh</h1>
                        <h2 className="home-title">Frontend Developer</h2>
                        <p className="home-description">
                            2nd Year CSE Student at VTU Belagavi | Passionate about creating beautiful and functional web experiences
                        </p>

                        <div className="home-buttons">
                            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                                View My Work
                            </button>
                            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                                Get In Touch
                            </button>
                            <a
                                href="/resume.pdf"
                                download
                                className="btn btn-primary"
                                style={{ textDecoration: 'none' }}
                            >
                                <FaDownload /> Download Resume
                            </a>
                        </div>

                        <div className="home-socials">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:shreyanshborannavar45@gmail.com" className="social-icon">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    <div className="home-image animate-fadeIn">
                        {/* Add your photo here - place it as /public/profile.jpg */}
                        <img src="/profile.jpg" alt="Shreyansh" className="profile-image" />
                        {/* Placeholder - remove once you add your photo */}
                        {/* <div className="image-placeholder">
                            <p>Add your photo</p>
                            <p className="image-note">Place your image in /public/profile.jpg</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
