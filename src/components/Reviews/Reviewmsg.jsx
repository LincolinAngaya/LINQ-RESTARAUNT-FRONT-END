import React from 'react'
import EditReview from './EditReview'
import '../Reviews/Review.scss'

function Review() {
  return (
    <li>
      <span className="user">{username}</span>
      <span className="time">{timestamp}</span>
    <EditReview />
    </li>
  )
}

export default Review