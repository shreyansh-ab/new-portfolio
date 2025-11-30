import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiC, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillsData = {
        'Programming Languages': [
            { name: 'C', icon: <SiC />, color: '#A8B9CC' },
            { name: 'Python', icon: <FaPython />, color: '#3776AB' },
            { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        ],
        'Tools & Technologies': [
            { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
            { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
            { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
            { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
            { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        ],
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-categories">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <div key={category} className="skills-category">
                            <h3 className="category-title">{category}</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="skill-card glass-card animate-fadeInUp"
                                        style={{ animationDelay: `${(categoryIndex * 3 + index) * 0.1}s` }}
                                    >
                                        <div className="skill-icon" style={{ color: skill.color }}>
                                            {skill.icon}
                                        </div>
                                        <h4 className="skill-name">{skill.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
