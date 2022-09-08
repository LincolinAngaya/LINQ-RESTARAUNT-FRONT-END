import React, { useState }from 'react'

import '../card/Card.scss'

function ReviewCard({location, name, phone_no, description, image}) {

    const [show, setShow]=useState(true)

  return (
    <article className='tour' >
      <div className='img-container'>
     <img 
      width="200"
      src={image}  alt={location} />
      
    </div>

    <div className='restaraunt-info'>
      
      <h4>{name}</h4>
      <h3>{location}</h3>
      <h4 className='colorred'>0{phone_no}</h4>
      <p>{description} </p>
       <div className='rbutton'>

        <button onClick={() => setShow(!show)}>{show ? "Show Review" : "Hide Review" }</button>
          </div>
        </div>
    </article>
  )
}

export default ReviewCard
