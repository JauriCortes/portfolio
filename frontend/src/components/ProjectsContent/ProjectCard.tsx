import ReactMarkdown from 'react-markdown'

import { API_URL } from "../../config";
import './ProjectCard.css';

interface Technology {
    id: number;
    name: string;
}

interface ProjectProps {
    project: {
        id: number;
        project_name: string;
        project_picture: string | null;
        project_github: string;
        project_link: string;
        project_description: string;
        technologies: Technology[];
    };
}

function ProjectCard( { project }: ProjectProps) {

    return(
        <div className="project-card">
            <div className='project-top-section'>

                <div className='project-aside'>
                    <div className="project-image-wrapper">
                        <img
                            src={`${API_URL}${project.project_picture}`}
                            alt={project.project_name}
                            />
                    </div>

                    <div className='project-footer'>
                        <a href={project.project_github} target='_blank' rel='noreferrer' className='btn-github'>
                            Github
                        </a>
                        {project.project_link &&(
                            <a href={project.project_link} target='_blank' rel='noreferrer' className='btn-link'>
                                Demo
                            </a>
                        )}
                    </div>
                </div>
                <div className="project-info-header">
                    <h3 className='project-name'>{project.project_name}</h3>
                    <div className="tech-container">
                        {project.technologies.map(tech => (
                            <span key={tech.id} className="tech-badge">
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="project-description">
                <ReactMarkdown>{project.project_description}</ReactMarkdown>
            </div>
        </div>
    );
}

export default ProjectCard