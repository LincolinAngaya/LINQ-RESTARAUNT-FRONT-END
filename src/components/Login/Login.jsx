import React, { useState }from 'react'
import { useHistory } from "react-router-dom";
import '../../NewRestarauntform.scss'


function Login() {



  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const history = useHistory();

  function handleOnChange(event){
    if (event.target.name === "email")
        setEmail(event.target.value);
    else{
        setPassword(event.target.value);
    }
}



function handleOnSubmit(event){

  const loginData = {
      email: email,
      password: password
  }

  event.preventDefault()
  fetch("http://localhost:9292/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      }, 
      body: JSON.stringify(loginData)
  })
  .then(response => response.json())
  .then(userData => {
      //console.log(userData)
      if(Object.values(userData)[0] === "Invalid email or Password"){
          alert("Invalid email or Password!");
      }
      else{
          alert("Login successful!");

          localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("loginStatus", JSON.stringify(true));
          history.replace("/new-restaraunt")
      }  
  });
}

  return (
    <div className='card1'>
    <form className='form1' onSubmit={handleOnSubmit} >
    
    <div className='control1'>
            <label htmlFor='text'>Email</label>
            <input type="text" name="email"  value={email} required onChange={handleOnChange}/>
        </div>
        <div className='control1'>
            <label htmlFor='password'>Password</label>
            <input type="password"  required id="password"  value={password} onChange={handleOnChange}/>
        </div>
        <div className='actions1'>
            <button>Log in</button>
        </div>
    </form>
  </div>
  )
}

export default Login