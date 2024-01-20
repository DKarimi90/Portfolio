import {useState, useEffect} from 'react'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
    const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

 
  const setDarkModePreference = (value) => {
    setDarkMode(value);
    localStorage.setItem("darkMode", JSON.stringify(value));
  };

// Dark mode toggling 
const handleDarkToggle = () => {
   setDarkModePreference(!darkMode)
}

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);


  return (
    <div className={darkMode? 'dark': ''}>
        <div className="dark:bg-black">
      <Navbar handleDarkToggle={handleDarkToggle}/>
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
