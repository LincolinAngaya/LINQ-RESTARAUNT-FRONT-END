import React from 'react'
import '../card/Card.scss'
import ReviewCard from './ReviewCard'
// import Reviews from '../Reviews/ReviewApp'


function RestarauntItem({restaraunts}) {
// const  [showReview, SetShowReview] = useState(false)
  
  return (
   <>
    

     { restaraunts.map((restaraunt) => <ReviewCard  
      
      key = {restaraunt.id}
      image = {restaraunt.image_url}
      name = {restaraunt.name}
      location = {restaraunt.location}
      phone_no = {restaraunt.phone_number}
      description = {restaraunt.description}
      /> )}
   
    {/* {showReview &&  <Reviews    />}  */}
    </>
  )
}

export default RestarauntItem
