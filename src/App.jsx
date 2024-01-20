import {useState} from 'react'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [darkMode, setDarkMode] = useState(false)

// Dark mode toggling 
const handleDarkToggle = () => {
  setDarkMode(!darkMode)
}


  return (
    <div className={darkMode? 'dark': ''}>
        <div className="dark:bg-black">
      <Navbar handleDarkToggle={handleDarkToggle}/>
        <Home />
        <About />
        <Skills />
      </div>
    </div>
  )
}

export default App
