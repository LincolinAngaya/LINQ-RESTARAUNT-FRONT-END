import React from 'react'
import EditReview from './EditReview'
import '../Reviews/Review.scss'

function Review() {
  return (
    <li>
      <span className="user">username</span>
      <span className="time">timestamp</span>
    <EditReview />
    <p>I love eating there</p>
    <div className="actions">
          <button >
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
          <button>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </div>
    </li>

    
  )
}

export default Review