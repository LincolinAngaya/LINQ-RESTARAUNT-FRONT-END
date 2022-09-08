import React, { useState } from "react";
import EditReview from './EditReview'
import '../Reviews/Review.scss'

function Review({ review, currentUser, onReviewDelete, onUpdateReview }) {

  const [isEditing, setIsEditing] = useState(false);

  const { id, username, comment, created_at: createdAt } = review;

  const timestamp = new Date(createdAt).toLocaleTimeString();

  const isCurrentUser = currentUser.username === username;


  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: "DELETE",
    });

    onReviewDelete(id);
  }

  function handleUpdateReview(updatedReview) {
    setIsEditing(false);
    onUpdateReview(updatedReview);
  }
  return (
    <li>
      <span className="user">{username}</span>
      <span className="time">{timestamp}</span>
      {isEditing ? (
      <EditReview
        id = {id}
        comment = {comment}
        onUpdateReview = {handleUpdateReview}
      />
      ) : (
        <p>{comment}</p>
      )}
    
 {isCurrentUser ? (

     <div className="actions">
     <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </button>
      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </div>
    ) : null}
   
    </li>
  )
}

export default Review