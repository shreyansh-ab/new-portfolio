import React from 'react';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm <strong>Shreyansh</strong>, a Computer Science Engineering student at VTU, Belagavi, passionate about technology, innovation, and building impactful solutions.
                        </p>
                        <p>
                            As one of the <strong>Founding members of Nexlinc</strong>, a student-led community platform, I'm working towards empowering students by creating clubs within colleges that connect, upskill, and inspire them through expert sessions, hackathons, study groups, and domain-based roadmaps.
                        </p>
                        <p>
                            I thrive in dynamic environments, enjoy solving challenging problems, and constantly seek opportunities to expand my knowledge. With a collaborative mindset and a drive for continuous learning, I aim to contribute to the tech industry while building communities that make a real difference.
                        </p>
                    </div>

                    <div className="about-cards">
                        <div className="about-card glass-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                            <div className="card-icon">
                                <FaGraduationCap />
                            </div>
                            <h3>Education</h3>
                            <p>Computer Science Engineering</p>
                            <p>VTU, Belagavi</p>
                        </div>

                        <div className="about-card glass-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            <div className="card-icon">
                                <FaCode />
                            </div>
                            <h3>Developer</h3>
                            <p>Building modern web applications with React, Node.js, and cutting-edge technologies</p>
                        </div>

                        <div className="about-card glass-card animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                            <div className="card-icon">
                                <FaRocket />
                            </div>
                            <h3>Nexlinc Founder</h3>
                            <p>Creating student clubs to connect, upskill, and inspire through community-driven learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
