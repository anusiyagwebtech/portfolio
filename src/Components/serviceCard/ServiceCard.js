import React from 'react'

function ServiceCard({
    ServiceCardIconClass, ServiceCardTitle, ServiceCardPara
}) {
  return (
    <div className='s-card'>
        <div><i className={ServiceCardIconClass}></i></div>
        <h3>{ServiceCardTitle}</h3>
        <p>{ServiceCardPara}</p>
    </div>
  )
}

export default ServiceCard