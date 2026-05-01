import React from 'react';
import { translations } from './translations';

function MyProjects({ lang }) {
    const projects = translations[lang]?.projectsData;
    const linkTexts = translations[lang]?.links;

    if (!projects) return null;

    return (
        <div className="projects-wrapper">
            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-header">
                            <span className="project-number">{project.id}</span>
                            <h3 className="project-title">{project.title}</h3>
                        </div>

                        <p className="project-description">{project.description}</p>

                        <div className="project-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noreferrer">
                                    {linkTexts.github}
                                </a>
                            )}
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noreferrer">
                                    {linkTexts.live}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;