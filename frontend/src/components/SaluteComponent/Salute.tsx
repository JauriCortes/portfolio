import { useState, useEffect } from "react";
import { API_URL } from "../../config";
import './Salute.css'

function Salute() {

    interface Author {
   
        author_name : string;
        author_description : string;
        author_picture : string;
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
        <div className="author-info">
            <h1 className="author-name">
                Hi! I'm <span>{author.author_name}</span>
            </h1>
            <h2 className="author-description">
                {author.author_description}
            </h2>
        </div>
    );
}

//<img height="60px" width="60px" src={`${API_URL}${author.author_picture}`}></img>
export default Salute