import React from 'react'
import { SlBadge } from 'react-icons/sl'
import { FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className="main-container">
      <h2 className="page-heading">About</h2>

      <div className="container">
        <div className="left">
            <img src="/my_image1000x1000.avif" alt="" />
        </div>
        <div className="right">
          <div className="about-detail-containers">

            <div className="detail-containers">
              <i><img src="/experience.png" alt="" /></i>
              <h3>Experience</h3>
              <p>1+ years<br />frontend<br />Development</p>
            </div>

            <div className="detail-containers">
              <i><FaGraduationCap/></i>
              <h3>Education</h3>
              <p>Pursuing BCA <br />in D.A.V <br />college</p>
            </div>
          </div>
          <p>
            Hi, I’m Shiva, a budding full-stack MERN developer currently in my second year of BCA. I’m passionate about learning and building web applications,  and I’m excited to grow my skills in this dynamic field.  As I embark on this journey, I’m eager to explore new technologies  and take on challenges that help me learn and improve.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About