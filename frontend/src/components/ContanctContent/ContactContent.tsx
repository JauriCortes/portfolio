import { useState, useEffect } from "react";
import { API_URL } from "../../config";
import './ContactContent.css'

import ReactMarkdown from 'react-markdown'

function ContactContent() {

    interface Contact {
   
        contact_MD : string
    }

    const [contact, setContact] = useState<Contact | null>(null);
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

                const data: Contact = await response.json();
                setContact(data);
            } catch(err) {
                setError("No se pudo cargar el contact");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthor();
    }, []);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>{error}</p>
    if (!contact) return "null";

    return(
        <div>
            <ReactMarkdown>{contact.contact_MD}</ReactMarkdown>
        </div>
    );
}

export default ContactContent