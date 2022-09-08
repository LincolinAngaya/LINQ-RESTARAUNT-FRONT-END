import React from 'react'
import Review from './Reviewmsg'
import '../Reviews/Review.scss'

function ReviewList({
     reviews,
     currentUser,
     onReviewDelete,
     onUpdateReview,
    }) {
  return (
    <div className="list">
    <ul>
     {reviews.map((review) =>(
      <Review 
      key ={review.id}
      review = {review}
      currentUser = {currentUser}
      onReviewDelete = {onReviewDelete}
      onUpdateReview = {onUpdateReview}
      />
     ))} 
    
     
    </ul>
  </div>
  )
}

export default ReviewList
