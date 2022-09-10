import React, { useState } from 'react'
import '../Reviews/Review.scss'
function EnterReview({reviews}) {

       const [reviewComment, setReviewComment] = useState(reviews);

    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
     
    })
      .then((r) => r.json())
      .then(() => {
        setReviewComment("");
      });


    }
  return (
    <form className="new-message"  onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={reviewComment} 
        onChange={(e) => setReviewComment(e.target.value)}
        
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default EnterReview