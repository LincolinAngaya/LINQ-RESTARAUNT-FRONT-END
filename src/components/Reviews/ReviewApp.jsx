import React, {useState, useEffect} from 'react'

import '../Reviews/Review.scss'
 import ReviewList from './ReviewList'
 import NewReviews from './NewReviews'
//  import EditReview from './EditReview'

const testUser = { username: "lincolin" };

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
  }, []);


  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }

  function handleDeleteReview(id) {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  }


  function handleUpdateReview(updatedReviewObj) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReviewObj.id) {
        return updatedReviewObj;
      } else {
        return review;
      }
    });
    setReviews(updatedReviews);
  }

 

  return (
    <main>
   <ReviewList
        currentUser={testUser}
        onReviewDelete={handleDeleteReview}
        onUpdateReview={handleUpdateReview}
   
   />
     
    <NewReviews  currentUser={testUser} onAddReview={handleAddReview}/> 
  
    </main>
  )
}

export default Reviews
