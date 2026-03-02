import React, { useMemo } from "react";
import { createPortal } from "react-dom";
import { X } from 'lucide-react';

import "./FloatingWindow.css"

interface FloatingWindowProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

function FloatingWindow( {title, onClose, children}: FloatingWindowProps) {

    
    const coordinates = useMemo(() => {
        //5%-45%
        //50vw de ancho
        const rand_left = (Math.random()*(45-4))+5;
    
        //10%-20%
        //70vh de alto
        const rand_top = (Math.random()*(20-10))+10

        return {top: `${rand_top}%`, left:`${rand_left}%`}

    }, [])

    return createPortal(
        <div className="floating-window" style={ coordinates }>
            <div className="floating-titlebar">
                { title }
                <button className="close-btn" onClick={onClose}>
                    <X size={20}/>
                </button>
            </div>
                { children }
        </div>
        , document.body
    )
}

export default FloatingWindow