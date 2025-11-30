import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaFolderOpen } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [openFolder, setOpenFolder] = useState(null);

    const folders = {
        'Mini Projects': [
            {
                id: 3,
                name: 'Todo List App',
                description: 'A simple todo list application with local storage support.',
                technologies: ['React', 'LocalStorage'],
                github: 'https://github.com',
                demo: 'https://example.com',
            },
            {
                id: 4,
                name: 'Calculator',
                description: 'Modern calculator with basic arithmetic operations.',
                technologies: ['JavaScript', 'CSS3'],
                github: 'https://github.com',
                demo: 'https://example.com',
            },
        ],
        'JS Games': [
            {
                id: 1,
                name: 'Snake Game',
                description: 'Classic snake game built with vanilla JavaScript and HTML5 Canvas.',
                technologies: ['JavaScript', 'HTML5', 'CSS3'],
                github: 'https://github.com',
                demo: 'https://example.com',
            },
            {
                id: 2,
                name: 'Tic Tac Toe',
                description: 'Interactive tic-tac-toe game with AI opponent and score tracking.',
                technologies: ['JavaScript', 'CSS3'],
                github: 'https://github.com',
                demo: 'https://example.com',
            },
        ],
    };

    const mainProjects = [
        {
            id: 5,
            name: 'E-Commerce Platform',
            description: 'Full-stack e-commerce application with product catalog, shopping cart, and payment integration.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            github: 'https://github.com',
            demo: 'https://example.com',
        },
        {
            id: 6,
            name: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media management with real-time data visualization and reporting.',
            technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
            github: 'https://github.com',
            demo: 'https://example.com',
        },
    ];

    const toggleFolder = (folderName) => {
        setOpenFolder(openFolder === folderName ? null : folderName);
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="projects-subtitle">
                    Explore my projects organized by category
                </p>

                <div className="projects-container">
                    {/* Folders for Mini Projects and JS Games - Side by Side */}
                    <div className="projects-folders">
                        {Object.entries(folders).map(([folderName, projects]) => (
                            <div key={folderName} className="project-folder">
                                <div
                                    className="folder-header glass-card"
                                    onClick={() => toggleFolder(folderName)}
                                >
                                    {openFolder === folderName ? <FaFolderOpen /> : <FaFolder />}
                                    <h3>{folderName}</h3>
                                    <span className="project-count">{projects.length} projects</span>
                                </div>

                                {openFolder === folderName && (
                                    <div className="folder-content">
                                        {projects.map((project, index) => (
                                            <div
                                                key={project.id}
                                                className="project-card glass-card animate-fadeInUp"
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                <h4 className="project-name">{project.name}</h4>
                                                <p className="project-description">{project.description}</p>

                                                <div className="project-technologies">
                                                    {project.technologies.map((tech) => (
                                                        <span key={tech} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>

                                                <div className="project-buttons">
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline btn-sm"
                                                    >
                                                        <FaGithub /> GitHub
                                                    </a>
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-primary btn-sm"
                                                    >
                                                        <FaExternalLinkAlt /> Demo
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Main Projects - Below Folders */}
                    <div className="main-projects">
                        <h3 className="projects-section-title">Main Projects</h3>
                        <div className="projects-grid">
                            {mainProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="project-card glass-card animate-fadeInUp"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <h4 className="project-name">{project.name}</h4>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-technologies">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-buttons">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline btn-sm"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary btn-sm"
                                        >
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
