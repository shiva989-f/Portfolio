import React from 'react'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
    return (
        <nav>
            <a href="#home" className="logo">Sh<span>i</span>va</a>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <FiMenu className='menu-icon'/>
        </nav>
    )
}

export default Navbar