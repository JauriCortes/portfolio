import { useState, useEffect } from "react";
import { API_URL } from "../../config";
import './ProjectsContent.css'

import ProjectCard from "./ProjectCard";

function ProjectsContent() {

    interface Technology {
        id: number;
        name: string;
    }

    interface Project {
        id: number;
        project_name: string;
        project_picture: string | null;
        project_github: string;
        project_link: string;
        project_description: string;
        technologies: Technology[];
    }

    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/projects`
                );

                if (!response.ok) {
                    throw new Error("Error al obtener datos");
                }

                const data: Project[] = await response.json();
                setProjects(data);
            } catch(err) {
                setError("No se pudo cargar el author");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>
    if (!projects) return null;

    return(
        <div className="projects-grid">
            {projects.map((item) => (
                <ProjectCard  project={item} />
            ))}
        </div>
    );
}

export default ProjectsContent