import React from 'react'
import '../card/Card.scss'

function RestarauntItem() {
  return (
    <article className='tour'>
   <div className='img-container'>
     <img 
      width="200"
      src ="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=400"  alt="Miami" />
      <span className='close-btn'>
         <i class="material-symbols-outlined">cancel_presentation</i>
      </span>
    </div>

    <div className='restaraunt-info'>
      <h3>City</h3>
      <h4>Name</h4>
      <h5>phone no</h5>
      <h6>
        info{""}
        <span>
             <i className="material-symbols-outlined">expand_more</i>
        </span>
        </h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores minima eos corrupti velit, deserunt repellendus. 
        </p>
    </div>
    

    </article>
    
  )
}

export default RestarauntItem
