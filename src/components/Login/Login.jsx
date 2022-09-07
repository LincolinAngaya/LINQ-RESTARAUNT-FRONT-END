import React from 'react'
import '../../NewRestarauntform.scss'


function Login() {
  return (
    <div className='card1'>
    <form className='form1' >
    
    <div className='control1'>
            <label htmlFor='text'>User Name</label>
            <input type="text"  required id="username" />
        </div>
        <div className='control1'>
            <label htmlFor='password'>Password</label>
            <input type="password"  required id="password" />
        </div>
        <div className='actions1'>
            <button>Log in</button>
        </div>
    </form>
  </div>
  )
}

export default Login