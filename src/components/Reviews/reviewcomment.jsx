import React, { useState } from 'react'
import '../Reviews/Review.scss'
function EnterReview() {
  
       const [reviewComment, setReviewComment] = useState();

    
  return (
    <form className="new-message" >
      <input
        type="text"
        name="body"
        autoComplete="off"
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default EnterReview