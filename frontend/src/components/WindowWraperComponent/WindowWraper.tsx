import React from "react";
import { createPortal } from "react-dom";
import { X } from 'lucide-react';

import "./WindowWrapper.css"

interface VentanaProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

function VentanaWrapper( {title, onClose, children}: VentanaProps) {
    return createPortal(
        <div className="wrapper-window">
            <div className="wrapper-titlebar">
                { title }
                <button className="close-btn" onClick={onClose}>
                    <X size={20}/>
                </button>
            </div>
            <div className="wrapper-body">
                { children }
            </div>
        </div>
        , document.body
    )
}

export default VentanaWrapper