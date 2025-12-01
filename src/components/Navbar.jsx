import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkTheme(false);
            document.documentElement.classList.add('light-theme');
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.classList.toggle('light-theme');

        // Save theme preference
        const newTheme = !isDarkTheme ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <div className="navbar-logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
                    <span className="logo-text">Shreyansh_AB</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                        <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a onClick={() => scrollToSection('about')}>About</a></li>
                        <li><a onClick={() => scrollToSection('nexlinc')}>Nexlinc</a></li>
                        <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                        <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                    </ul>

                    {/* Theme Toggle Button */}
                    <button className="theme-toggle-nav" onClick={toggleTheme} aria-label="Toggle theme">
                        {isDarkTheme ? <FaSun /> : <FaMoon />}
                    </button>

                    <div className="navbar-toggle" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
