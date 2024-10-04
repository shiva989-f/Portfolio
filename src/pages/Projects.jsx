import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaShareFromSquare } from 'react-icons/fa6'

const Projects = () => {
  return (
    <div id='projects' className='main-container'>
      <h2 className='page-heading'>Projects</h2>
      <div className="project-container">
        <div className="project">
          <img src="/project-1.png" alt="project" />
          <h3>Project One</h3>
          <div className="buttons">
            <button className="btn button-1"><a href="">Github</a><i><FaGithub /></i></button>
            <button className="btn button-1"><a href="">Live Demo</a><i><FaShareFromSquare /></i></button>
          </div>
        </div>

        <div className="project">
          <img src="/project-2.png" alt="project" />
          <h3>Project Two</h3>
          <div className="buttons">
            <button className="btn button-1"><a href="">Github</a><i><FaGithub /></i></button>
            <button className="btn button-1"><a href="">Live Demo</a><i><FaShareFromSquare /></i></button>
          </div>
        </div>

        <div className="project">
          <img src="/project-3.png" alt="project" />
          <h3>Project Three</h3>
          <div className="buttons">
            <button className="btn button-1"><a href="">Github</a><i><FaGithub/></i></button>
            <button className="btn button-1"><a href="">Live Demo</a><i><FaShareFromSquare /></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects