import { useState, useEffect } from "react";


import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun.svg";

 

function DarkModeButton() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(nextTheme)
    }

    useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <button onClick={toggleTheme} className="boton-redondo">
            <img src={theme === 'light' ? moonIcon: sunIcon} width="30px" height="30px" />
        </button>
    )
}

export default DarkModeButton