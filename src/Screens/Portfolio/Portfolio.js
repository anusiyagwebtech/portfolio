import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import PortfolioCards from '../../Components/PortfolioCards/PortfolioCards';
import codeEditer from '../../Assets/codeEdit.png'
import realestate from '../../Assets/realestate.png'
import shopify from '../../Assets/shopify.png'
import ecommerce from '../../Assets/ecommerce.png'


function Portfolio() {
  return (
    <div className='wrapper'>
      <SideBar/>
      <div className='container'>
        <div className='portfolio-page'>
             <h2 className='title'>Portfolio</h2>
             <h3 className='title'>My Last Projects</h3>
            <div className='grid-template'>
            <PortfolioCards src={ecommerce} para={'Built a cross-platform eCommerce app with React Js, featuring dynamic product listings and cart functionality using Fake Store API. Enhanced skills in web development and API integration'} heading={' Ecommerce Website '} to={'https://anusiyagwebtech.github.io/FakeStoreApiEcommerce/'}/>
            <PortfolioCards src={shopify} para={'Fully responsive eCommerce site with dynamic product listings and cart functionality using MockAPI. Improved skills in API integration and responsive design.'} heading={'Ecommerce Website'} to={'https://anusiyagwebtech.github.io/Mini-Ecommerce/'}/>
            
              <PortfolioCards src={codeEditer} para={'Developed a React.js code editor with React Ace, enabling real-time syntax highlighting and instant output, with a focus on responsive and user-friendly design'} heading={'Code Editor'} to={'https://anusiyagwebtech.github.io/CodeEditor/'}/>
              <PortfolioCards src={realestate} para={'Developed a fully responsive one-page real estate website using HTML, CSS, and JavaScript, focusing on clean design and user-friendly navigation'} heading={' Real estate website '} to={'https://anusiyagwebtech.github.io/OnePageEstateWeb/'}/>
              
            

            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;