import React from 'react'
import SideBar from '../../Components/SideBar/SideBar';
import { Link } from 'react-router-dom';
import hi from '../../Assets/newresume.pdf'

function AboutPage() {
  return (
    <div className='wrapper'>
        <SideBar/>
  <div className='about-page'>
  <div>
      <h2 className='title'>About Me</h2>

      <h3 className='title'>I am Anusiya. G and <span>Web Developer</span></h3>
      <p className='para'>
      I am a passionate and dedicated front-end developer with a strong foundation in HTML, CSS, JavaScript, React.js, React Native, and Bootstrap. My journey into web development has been fueled by a love for creating visually appealing and user-friendly interfaces. <br/> <br/>

Through hands-on experience, including building responsive eCommerce websites and dynamic web applications, I have honed my skills in crafting efficient, clean, and functional code. My background in Physics has further enhanced my problem-solving abilities, allowing me to approach challenges with a logical and analytical mindset.  <br/>

      </p>
    </div>
    <div className='detail-grid'>
      <div>
        <p><span>Birth: </span>02/03/2002 </p>
        <p><span>Website: </span> portfolio.com </p>
        <p><span>Degree: </span> B.Sc </p>
        <p><span>City: </span>Madurai </p>
      </div>
      <div>
      <p><span>Age: </span>23 </p>
        <p><span>Email: </span> <Link to={'mailto: anusiyagwebtech@gmail.com'}> anusiyagwebtech@gmail.com</Link> </p>
        <p><span>Phone: </span><Link to={'tel: +91 80566638453'}>+91 80566 638453</Link>  </p>
        <p><span>Freelance: </span>Available </p>
      </div>
      <div>
        <p>HTML</p>
        <p>CSS</p>
        <p>JAVASCRIPT</p>
        <p>REACT JS</p>

      </div>
      <div>
         <p>React Native</p>
         <p>Bootstrap</p>
         <p>Scss</p>
         <p>API Integration</p>
      </div>
    </div>
    <button><a href={hi}  rel='noopener noreferer' target='_blank'>Resume</a></button>
  

    <div className='exp-edu'>

      <div>

          <h2 className='title'>Experience</h2>
          <div className='divider'>
             <h3 >Intern - Front-End Developer at Thanvi Technologies</h3>
             <p>Dates: [Dec 2023 - Feb 2024] </p>
             <div>
              <p className='high-lighted'>Enhanced existing websites by making them fully responsive, ensuring optimal performance across various devices and screen sizes.</p>
              <p className='high-lighted'>Collaborated with the design and development teams to implement UI/UX improvements.</p>
              <p className='high-lighted'>Gained hands-on experience in HTML, CSS, and JavaScript while working in a fast-paced environment.</p>
             </div>
            <div className='divider'>
               <h3>Front-End Developer at Covenant Technologies</h3>
               <p>Dates: [Feb 2024 - August 2024]</p>
               <div>
               <p className='high-lighted'>Worked on React.js and React Native projects, contributing to the development of both web and mobile applications.</p>
               <p className='high-lighted'>Successfully built and deployed APKs for Android applications, ensuring functionality and performance.</p>
               <p className='high-lighted'>Collaborated with cross-functional teams to deliver high-quality software products.</p>
               </div>
            </div> 
          </div>


          

      </div>
      
      <div>
        <h2 className='title'>Education</h2>
        <div className='divider'>
          <h3>Bachelor of Science (BSc) in Physics </h3>
          <p>Sri Meenakshi Government Arts College for Women [2020-2023]</p>
          <p >Graduated with 80%</p>
        </div>
        <div  className='divider'>
          <h3>HSC</h3>
          <p>SRI MEENAKSHI SUNDARESWARAR GIRLS HR SEC SCHOOL [2018-2020]</p>
          <p >Scored 76%</p>
        </div>
        <div  className='divider'>
          <h3>SSLC</h3>
          <p>SRI MEENAKSHI SUNDARESWARAR GIRLS HR SEC SCHOOL [2017-2018]</p>
          <p >Scored 92%</p>
        </div>
          
      </div>
      
      


    </div>

    </div>
    </div>
   
  
  )
}

export default AboutPage;