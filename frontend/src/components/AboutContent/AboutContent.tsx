import { useState, useEffect } from "react";
import { API_URL } from "../../config";
import './AboutContent.css'

import ReactMarkdown from 'react-markdown'

import {Github, File} from 'lucide-react'

function AboutContent() {

    interface About {
   
        about_MD : string,
        about_github: string,
        about_doc: string
    }

    const [about, setAbout] = useState<About | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/about`
                );

                if (!response.ok) {
                    throw new Error("Error al obtener datos");
                }

                const data: About = await response.json();
                setAbout(data);
            } catch(err) {
                setError("No se pudo cargar el About");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAbout();
    }, []);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>
    if (!about) return "null";

    const handleIconClick = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return(
        <div className="about-content">
            <div>
                <ReactMarkdown>{about.about_MD}</ReactMarkdown>
            </div>
        </div>
    );
}

export default AboutContent