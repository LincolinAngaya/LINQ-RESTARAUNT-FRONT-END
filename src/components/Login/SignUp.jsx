import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function SignUp() {

 
    const history = useHistory();

    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");  


    function handleOnChange(event){
        if(event.target.name === "firstname"){
            setFirstname(event.target.value);
        }
        else if (event.target.name === "lastname"){
            setLastname(event.target.value);
        }
        else if (event.target.name === "email"){
            setEmail(event.target.value);
        }
        else{
            setPassword(event.target.value);
        }  
      }


  return (
    <div className='card1'>
    <form className='form1' >
    
    <div className='control1'>
            <label htmlFor='text'>First Name</label>
            <input type="text"  required id="username" />
        </div>
        <div className='control1'>
            <label htmlFor='text'>Last Name</label>
            <input type="text"  required id="username" />
        </div>
        <div className='control1'>
            <label htmlFor='text'>Email</label>
            <input type="text"  required id="username" />
        </div>
        <div className='control1'>
            <label htmlFor='password'>Password</label>
            <input type="password"  required id="password" />
        </div>
        <div className='actions1'>
            <button>Sign Up</button>
        </div>
    </form>
  </div>
  )
}

export default SignUp