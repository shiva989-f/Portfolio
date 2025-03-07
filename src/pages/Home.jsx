import React from 'react'
import resume from '/resume.pdf'
import { FaLinkedin, FaGithubSquare,FaWhatsappSquare, FaInstagramSquare } from 'react-icons/fa'

const Home = () => {
    return (
        <div id='home' className='main-container'>
            <main>
                <div className="left">
                    <h3>Hi There,</h3>
                    <h1>I am Sh<span>i</span>va</h1>
                    <p className="intro">A MERN stack developer by day,
                        caffeine enthusiast by night. If coding were a sport,
                        I'd have a gold medal... or at least a snack!</p>

                    <div className="buttons">
                        <button className="btn button-1" onClick={() => window.open(resume)}>Download CV</button>
                        <button className="btn button-2">Contact</button>
                    </div>
                </div>
                <div className="right">
                    <div className="jiggly-div">
                    </div>
                </div>

                <div className="info-container">
                    <div className="info">
                        <h3>Email</h3>
                        <p>kumarshiva05722@gmail.com</p>
                    </div>
                    <div className="info">
                        <h3>Phone</h3>
                        <p>+91 7710775821</p>
                    </div>
                    <div className="info">
                        <h3>Location</h3>
                        <p>Jalandhar, Punjab, India📍</p>
                    </div>
                </div>
            </main>

            <aside>
                <a target='_blank' href="https://www.linkedin.com/in/dev-shiva-kumar/"><FaLinkedin /></a>
                <a target='_blank' href="https://github.com/shiva989-f"><FaGithubSquare /></a>
                <a target='_blank' href="https://wa.me/+917710775821"><FaWhatsappSquare/></a>
                <a target='_blank' href=""><FaInstagramSquare /></a>
            </aside>
        </div>
    )
}

export default Home