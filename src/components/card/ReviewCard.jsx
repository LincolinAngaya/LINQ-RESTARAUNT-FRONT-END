
import React, { useState } from 'react'
// import Reviews from '../Reviews/ReviewApp'

import '../card/Card.scss'
import '../Reviews/Review.scss'

function ReviewCard({location, name, phone_no, description, image,reviews}) {

     const [show, setShow] = useState(false)

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

            <button onClick={() => setShow(!show)}>{show ? "Hide Review" : "Show Review"}</button>
      </div>  
    </div>  
{show &&  <main>
      
    
      <div className="list" >
      <ul>
        {reviews.map((review) => 
       
  <li key = {review.id}>
 
       <span className="user">{review.user.username}</span>
       <span className="time">{review.user.created_at}</span>
 
        <p>{review.comment}</p> 
        </li>   
       )} 
        </ul>
 </div> 
 <form className="new-message"  >
      <input
        type="text"
        name="body"
        autoComplete="off"
        // value={comment}
        // onChange={(e) => setComment(e.target.value)}
        
      />
      <button type="submit">Send</button>
    </form>
       </main> 
        }
     
    </article>
    
  )
}

export default ReviewCard
