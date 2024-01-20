import {useState} from 'react'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from './components/About'

function App() {
  const [darkMode, setDarkMode] = useState(false)

// Dark mode toggling 
const handleDarkToggle = () => {
  setDarkMode(!darkMode)
}


  return (
    <div className={darkMode? 'dark': ''}>
        <div className="dark:bg-hero bg-hero2">
      <Navbar handleDarkToggle={handleDarkToggle}/>
        <Home />
        <About />
      </div>
    </div>
  )
}

export default App
