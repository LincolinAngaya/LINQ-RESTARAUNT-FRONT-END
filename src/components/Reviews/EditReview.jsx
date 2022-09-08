import { Comment } from "antd";
import React, { useState } from "react";

import '../Reviews/Review.scss'

function EditReview({ id, comment, onUpdateReview }) {

  const [reviewComment, setReviewComment] = useState(Comment);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/reviews/${id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    comment: reviewComment,
  }),
})
  .then((r) => r.json())
  .then((updatedReview) => onUpdateReview(updatedReview));
}
  return (
    <form className="edit-message"  onSubmit={handleFormSubmit}>
    <input 
    type="text"
     name="comment" 
     autoComplete="off"
     value={reviewComment} 
     onChange={(e) => setReviewComment(e.target.value)}/>
    <input type="submit" value="Save" />
  </form>
  )
}

export default EditReview