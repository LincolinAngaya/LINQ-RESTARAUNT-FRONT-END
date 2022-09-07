import React,{ useState }from 'react'
import '../card/Card.scss'
import Reviews from '../Reviews/ReviewApp'


function RestarauntItem() {

  
  return (
    <article className='tour'>
   <div className='img-container'>
     <img 
      width="200"
      src ="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=400"  alt="Miami" />
      <span className='close-btn'>
         <i className="material-symbols-outlined">cancel_presentation</i>
      </span>
    </div>

    <div className='restaraunt-info'>
      <h3>City</h3>
      <h4>Name</h4>
      <h4>phone no</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores minima eos corrupti velit, deserunt repellendus. 
        </p>
      <div className='rbutton'>
        <button>Add Review</button>
  
        </div>
        <Reviews    />
         
    
    </div>
    


    </article>
    
  )
}

export default RestarauntItem
