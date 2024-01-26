import { useState, useEffect } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { BrowserRouter } from 'react-router-dom';

function App() {
    const [darkMode, setDarkMode] = useState(true); // Set initial state to true for dark mode

    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        setDarkMode(storedDarkMode ? JSON.parse(storedDarkMode) : true); // Check local storage for dark mode preference
    }, []);

    const setDarkModePreference = (value) => {
        setDarkMode(value);
        localStorage.setItem("darkMode", JSON.stringify(value));
    };

    // Dark mode toggling 
    const handleDarkToggle = () => {
        setDarkModePreference(!darkMode);
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="dark:bg-black">
                <BrowserRouter>
                    <Navbar handleDarkToggle={handleDarkToggle} />
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
