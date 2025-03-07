import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaShareFromSquare } from 'react-icons/fa6'

const Projects = () => {
  return (
    <div id='projects' className='main-container'>
      <h2 className='page-heading'>Projects</h2>
      <div className="project-container">
        <div className="project">
          <img src="/wheelhive.png" alt="project" />
          <h3>WheelHive</h3>
          <div className="buttons">
            <button className="btn button-1"><a target='_blank' href="https://github.com/shiva989-f/WheelHive">Github</a><i><FaGithub /></i></button>
            <button className="btn button-1"><a target='_blank' href="https://wheelhive.netlify.app/all-cars">Demo</a><i><FaShareFromSquare /></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects