import React from 'react'
import '../Reviews/Review.scss'

function EditReview() {
  return (
    <form className="edit-message" >
    <input type="text" name="body" autoComplete="off" />
    <input type="submit" value="Save" />
  </form>
  )
}

export default EditReview