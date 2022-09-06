import React from 'react'

function RestarauntItem() {
  return (
    <article className='tour'>
   <div className='img-container'>
     <img 
      width="200"
      src ="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=400"  alt="Miami" />
    </div>
    <span className='close-btn'>
    <span class="material-symbols-outlined">
cancel_presentation
</span>
    </span>

    </article>
    
  )
}

export default RestarauntItem
