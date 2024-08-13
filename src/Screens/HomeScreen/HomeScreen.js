import React from 'react'
import image from '../../Assets/hair.jpg'
import SideBar from '../../Components/SideBar/SideBar';

function HeroPage() {

  return (
    <div className='wrapper'>
      <SideBar/>
 <div className='container'>
        <div className='hero-page'>
          <div className='hero-content'>
            <h3>Hello, my name is  <span >Anusiya. G</span></h3>

            <h2>I am a
                <span> Web Developer</span></h2>

            <p>Skilled in HTML, CSS, JavaScript, React.js, and React Native. Experienced in building responsive web applications and eCommerce sites. Self-taught through YouTube with practical project experience.
</p>

     <button> <a href='#'>More about Me</a> </button></div>
          {/* <div className='hero-img'>
            <img src={image}/>

          </div> */}

        </div>

    </div>
    </div>
    
   
  )
}

export default HeroPage;