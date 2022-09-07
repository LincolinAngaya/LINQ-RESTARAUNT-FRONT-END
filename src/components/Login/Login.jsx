import React from 'react'
import '../../NewRestarauntform.scss'


function Login() {
  return (
    <div className='card'>
    <form className='form' >
    
    <div className='control'>
            <label htmlFor='text'>User Name</label>
            <input type="text"  required id="username" />
        </div>
        <div className='control'>
            <label htmlFor='password'>Password</label>
            <input type="password"  required id="password" />
        </div>
        <div className='actions'>
            <button>Log in</button>
        </div>
    </form>
  </div>
  )
}

export default Login