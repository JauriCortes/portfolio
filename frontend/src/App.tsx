import { useState, useEffect } from "react";
import './App.css'

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Mi escritorio</h1>

      <button onClick={toggleTheme} style={{ padding: '10px 20px', cursor: 'pointer'}}>
        Pasar a modo {theme === 'light' ? 'Oscuro': 'Claro'}
      </button>
    </div>
  )
}

export default App
