import React from 'react'
import '../../NewRestarauntform.scss'


function Login() {
  return (
    <div className='card'>
    <form className='form' >
    <div className='control'>
            <label htmlFor='image'>Restaraunt Image</label>
            <input type="url"  required id="image" />
     </div>
    <div className='control'>
            <label htmlFor='text'>Restaraunt Name</label>
            <input type="text"  required id="name" />
        </div>
        <div className='control'>
            <label htmlFor='location'>Restaraunt Location</label>
            <input type="text"  required id="location" />
        </div>
        <div className='control'>
            <label htmlFor='number'>Phone Number</label>
            <input type="text"  required id="number" />
        </div>
        <div className='control'>
            <label htmlFor='description'>Restaraunt Description</label>
            <textarea id="description" required rows='5' />
        </div>
        <div className='actions'>
            <button>Add New Restaraunt</button>
        </div>
    </form>
  </div>
  )
}

export default Login