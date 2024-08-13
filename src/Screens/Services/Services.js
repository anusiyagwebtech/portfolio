import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import ServiceCard from '../../Components/serviceCard/ServiceCard'

function Services() {
  return (
    <div className='wrapper'>
      <SideBar/>
      <div className='container'>
         <div className='service-page'>
           <h2 className='title'>Services</h2>
           <div className='grid-temp'>
              <ServiceCard ServiceCardIconClass={'fa-solid fa-paintbrush'} ServiceCardPara={'Building Responsive, User-Friendly Websites with HTML, CSS, JavaScript, and Modern Front-End Technologies'} ServiceCardTitle={' Front-End Development'}/>
              <ServiceCard ServiceCardIconClass={"fa-solid fa-cubes"} ServiceCardTitle={'React.js Development'} ServiceCardPara={'Creating Dynamic, Interactive Web Applications Using React.js, Component-Based Architecture, and State Management'}/>
              <ServiceCard ServiceCardIconClass={"fa-solid fa-droplet"} ServiceCardPara={'Developing Cross-Platform Mobile Applications with React Native, Ensuring Seamless Performance on Android'} ServiceCardTitle={' Mobile App Development (React Native)'}/>
              <ServiceCard ServiceCardIconClass={"fa-solid fa-diamond"} ServiceCardTitle={'Website Optimization'} ServiceCardPara={'Enhancing Website Performance, Speed, and SEO with Code Optimization and On-Page Best Practices'}/>
              <ServiceCard ServiceCardIconClass={"fa-solid fa-splotch"} ServiceCardTitle={'Responsive Design Implementation'} ServiceCardPara={'Transforming Existing Websites into Fully Responsive Platforms for Optimal Viewing on All Devices'}/>
              <ServiceCard ServiceCardIconClass={"fa-solid fa-thumbs-up"} ServiceCardTitle={' Maintenance & Support'} ServiceCardPara={'Providing Ongoing Website Maintenance, Updates, and Feature Enhancements to Keep Your Digital Presence Strong'}/>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Services