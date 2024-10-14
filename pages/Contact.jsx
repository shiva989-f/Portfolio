import { useState } from 'react'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import Footer from '../components/Footer'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [emailMSG, setEmailMSG] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    // Emailjs ids
    const SERVICE_ID = 'service_6jx5t8h';
    const TEMPLATE_ID = 'template_d5sorol';
    const PUBLIC_KEY = 'IbNQRBLEJS5LQZBcr';

    // Create a new object which contains the data of emailjs
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Shiva Kumar',
      message: formData.message,
    }

    // Send the mail using emailjs
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then((res)=> {
      console.log("Email Sent Successfully", res);
      setEmailMSG("Email Sent Successfully, Thank You!")
      // Clearing all feeds
      setFormData({ name: '', email: '', message: '' })
    })
    .catch((err)=> {
      console.log("Error sending email", err);
      
    })

    
  }

  return (
    <div id='contact' className='main-container'>
      <h2 className="page-heading">Contact</h2>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name">Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              type='text'
              name='message'
              value={formData.message}
              onChange={handleChange}
              spellCheck='false'
              required
            />
          </div>

          <button className="btn button-1" type='submit'>Submit</button>
        </form>
      </div>

      <div className="contact-container">
        <div className="email">
          <i><SiGmail /></i>
          <a href="mailto:kumarshiva05722@gmail.com" target='_blank'>Send Mail Directly</a>
        </div>
        <div className="linkedin">
          <i><FaLinkedin /></i>
          <a href="">LinkedIn</a>
        </div>
      </div>

      <div className={emailMSG ? "email-msg": "hide"}>
        <i onClick={()=> setEmailMSG("")}><MdClose/></i>
        {emailMSG}
        </div>

      <Footer/>
    </div>
  )
}

export default Contact