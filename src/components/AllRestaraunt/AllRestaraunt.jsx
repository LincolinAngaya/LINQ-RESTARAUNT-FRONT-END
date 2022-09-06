import React from 'react'

import '../AllRestaraunt/AllRestaraunt.scss'

 import RestarauntItem from '../card/RestarauntItem';

function AllRestaraunts() {

  const myStyle={
    
      width: '100%',
      height: '100vh',
      backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),url("https://media.smallbiztrends.com/2021/07/restaurant-name.png")',
      backgroundSize: 'cover',
      backgroundPosition:'center',
};

const heading = {
  color:"white",
  fontSize:"2.4rem",
  padding:"9px"

}
  return (

    <div style={myStyle}>
     <h1 style={heading}>All Restaraunts</h1> 
    </div>
  )
}

export default AllRestaraunts