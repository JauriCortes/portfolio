import { useState, useEffect } from "react";
import { API_URL } from "../../config";
import './BioContent.css'

import ReactMarkdown from 'react-markdown'

function BioContent() {

    interface Author {
   
        author_name : string
        author_picture : string
        author_description : string
        author_biography : string
        author_mail : string
        author_github : string
        author_linkedin : string
    }

    const [author, setAuthor] = useState<Author | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/author`
                );

                if (!response.ok) {
                    throw new Error("Error al obtener datos");
                }

                const data: Author = await response.json();
                setAuthor(data);
            } catch(err) {
                setError("No se pudo cargar el author");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthor();
    }, []);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>
    if (!author) return null;

    return(
        <div className="bio-content">
            <div className="header">
                <img alt={author.author_name} className="profile-pic" src={`${API_URL}${author.author_picture}`}></img>
                <div className="header-text">
                    <h1> { author.author_name } </h1>  
                    <p> { author.author_description } </p>  
                </div>
            </div>
            <div className="description-md">
                <ReactMarkdown>{ author.author_biography}</ReactMarkdown>
            </div>
        </div>
    );
}

export default BioContent