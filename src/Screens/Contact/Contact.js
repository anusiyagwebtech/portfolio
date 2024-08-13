import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { Link } from 'react-router-dom'

function Contact() {
  return (
   <div className="wrapper" >
       <SideBar/>
       <div className='container'>
         <div className='contact-page'>
            <h2 className='title'>Contact Me</h2>

            <h3 className='highlight center'>Have You Any Questions?</h3>
            <h4 className='normar center'>I am at your service</h4>

            <div  className='contact-grid'>
              <div>
              <i class="fa-solid fa-phone"></i>
                <h4>Call Me</h4>
                <p><Link to={'tel: +91 8056638453'}>+91 8098484986</Link></p>
              </div>
              <div>
              <i class="fa-solid fa-envelope"></i>
                <h4>Email</h4>
                <p><Link to={'mailto: anusiyagwebtech@gmail.com'}>anusiyagwebtech@gmail.com</Link></p>
              </div>
              <div>
              <i class="fa-solid fa-globe"></i>
                <h4>Website</h4>
                <p><Link to={'https://anusiyagwebtech.github.io/portfolio'}>portfolio.com</Link></p>
              </div>
              <div>
              <i class="fa-brands fa-linkedin"></i>
                <h4>Linkedin</h4>
                <p><Link to={'https://www.linkedin.com/in/anusiyagwebtech/'}>linkedin.com</Link></p>
              </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Contact