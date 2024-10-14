import React, { useState } from "react";
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    
    // Toggle the nav link display on menu button click
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <nav>
            <a href="#home" className="logo">Sh<span>i</span>va</a>
            <ul className={isNavVisible ? "nav-links show" : "nav-links"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            
            <span className='menu-icon' onClick={toggleNav} >
                {isNavVisible ? <MdClose /> : <FiMenu />}
            </span>
        </nav>
    )
}

export default Navbar