import React from 'react'
import { Link } from 'react-router-dom'

function PortfolioCards({src, para, heading,to}) {
  return (
    <div className='portfolio-card'>
        <Link to={to} target='_blank'>
        <div className='image-bg'>
            <img src={src} />
        </div>
        <div className='portfolio-content'>

            <h3>{heading}</h3>
            <p> {para}</p>
        </div></Link>
    </div>
  )
}

export default PortfolioCards