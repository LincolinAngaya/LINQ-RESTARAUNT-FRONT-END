import React from 'react'

import '../Reviews/Review.scss'
 import ReviewList from './ReviewList'
 import NewReviews from './NewReviews'
//  import EditReview from './EditReview'
function Reviews() {
  return (
    <main>
   <ReviewList/>
     
    <NewReviews/> 
  
    </main>
  )
}

export default Reviews
