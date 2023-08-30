import { useState } from "react"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Logo from '../assets/logo.svg'
import './Homepage.css'

// Homepage.jsx

const Homepage = () => {

    const [isClick, setIsclick] = useState(false)

    return (
        <div className={`container ${isClick ? "blurred-content" : ""}`}>
            <div 
                className={`back-drop ${isClick ? "back-drop-active" : ""} `} 
                onClick={() => {
                    setIsclick(false)
                }}
            />
            <Navbar isClick={isClick} setIsclick={setIsclick} />
            <Content />
        </div>
    )
}

export default Homepage