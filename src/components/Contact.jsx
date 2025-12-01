import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const contactLinks = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/shreyansh-b-037603334',
            color: '#0077B5',
            description: 'Let\'s connect professionally',
        },
        {
            name: 'Email',
            icon: <FaEnvelope />,
            url: 'mailto:shreyanshborannavar45@gmail.com',
            color: '#EA4335',
            description: 'Send me a message',
        },
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>

                <div className="contact-grid">
                    {contactLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card glass-card animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="contact-icon" style={{ color: link.color }}>
                                {link.icon}
                            </div>
                            <h3 className="contact-name">{link.name}</h3>
                            <p className="contact-description">{link.description}</p>
                        </a>
                    ))}
                </div>

                <div className="contact-footer">
                    <p>© 2025 Shreyansh_AB. Built with  ❤️</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
