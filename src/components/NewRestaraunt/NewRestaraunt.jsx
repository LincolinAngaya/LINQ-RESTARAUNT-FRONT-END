import React from 'react'
import '../NewRestaraunt.scss'

function NewRestaraunts() {
  return (
    <div className='Card'>
    <form className='form' >
    <div className='control'>
            <label htmlFor='image'>Movie Image</label>
            <input type="url"  required id="image" />
        </div>
    <div className='control'>
            <label htmlFor='title'>Movie Title</label>
            <input type="text"  required id="title" r/>
        </div>
        <div className='control'>
            <label htmlFor='type'>Movie Type</label>
            <input type="text"  required id="type" />
        </div>
        <div className='control'>
            <label htmlFor='year'>Movie Year</label>
            <input type="text"  required id="year" />
        </div>
        <div className='control'>
            <label htmlFor='description'>Movie Trailer</label>
            <textarea id="description" required rows='5' />
        </div>
        <div className='actions'>
            <button>Add New Movie</button>
        </div>
    </form>
  </div>
  )
}

export default NewRestaraunts

