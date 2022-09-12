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

      function handleCreateAccountAlert(responseData = {}){
        if(Object.values(responseData)[0] === "Admin already Exists"){
            alert("Admin email already exists, please Login!")
            history.replace("/")   
        }
        else{
           alert("Account Created successfully!")
           history.replace("/login")   
        }
    }


    function handleCreateAccount(event){
        event.preventDefault()
        const newAdmin = {
            firstname: firstname,
            lastname : lastname,
            email: email.toLowerCase(), 
            password: password
        }
        fetch("https://linq-restaraunt.herokuapp.com/create-account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newAdmin)
        })
        .then(response => response.json())
        .then(responseData => handleCreateAccountAlert(responseData));
    }
  return (
    <div className='card1'>
    <form className='form1' onSubmit={handleCreateAccount} >
    
    <div className='control1'>
            <label htmlFor='text'>First Name</label>
            <input type="text" name="firstname" value ={firstname} required id="firstname" onChange={handleOnChange} />
        </div>
        <div className='control1'>
            <label htmlFor='text'>Last Name</label>
            <input type="text" name="lastname" value ={lastname} required id="lastname" onChange={handleOnChange} />
        </div>
        <div className='control1'>
            <label htmlFor='text'>Email</label>
            <input type={"email"} name="email"  value={email} required onChange={handleOnChange}/>
        </div>
        <div className='control1'>
            <label htmlFor='password'>Password</label>
            <input type={"password"} name="password" value={password} required onChange={handleOnChange}/>
        </div>
        <div className='actions1'>
            <button>Sign Up</button>
        </div>
    </form>
  </div>
  )
}

export default SignUp