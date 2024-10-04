import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='main-container'>
      <h2 className="page-heading">Experience</h2>
      <div className="container">
        <div className="left">
          <h2>Frontend</h2>

          <div className="experiences-container">

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>Tailwind</h3>
                <p>Basic</p>
              </div>
            </div>

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>Javascript</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>Bootstrap</h3>
                <p>Intermediate</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="right">
          <h2>Backend & Other</h2>

          <div className="experiences-container">

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>Nodejs</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>MongoDB</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>Express js</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="experience">
              <img src="/checkmark.png" alt="checkmark" />
              <div className="experience-name">
                <h3>Java</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience