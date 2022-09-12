import React, {useState} from 'react'
import '../Reviews/Review.scss'
import Axios from 'axios'
function EnterReview() {

  const [data, setData] = useState({comment:""})
   const url = "https://linq-restaraunt.herokuapp.com/reviews"

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      comment:data.comment

    })
    .then(res =>{
            console.log(res.data)
    })
  }

  return (

   

    <form className="new-message" onSubmit={(e) => submit(e)}>
      <input
      onChange={(e)=>handle(e)}
      value={data.comment}
        type="text"
        id ="comment"
        name="comment"
        autoComplete="off"
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default EnterReview