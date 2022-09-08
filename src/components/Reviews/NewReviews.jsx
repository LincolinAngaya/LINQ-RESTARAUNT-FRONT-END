import React, { useState } from "react";

import '../Reviews/Review.scss'

function NewReviews({ currentUser, onAddReview }) {
  const [comment, setComment] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: currentUser.username,
        comment: comment,
      }),
    })
      .then((r) => r.json())
      .then((newReview) => {
        onAddReview(newReview);
        setComment("");
      });
  }

  return (
    <form className="new-message"  onSubmit={handleSubmit} >
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default NewReviews