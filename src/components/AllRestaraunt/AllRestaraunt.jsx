import React from 'react'

import '../AllRestaraunt/AllRestaraunt.scss'
 import bg from '../../assets/restaraunt.jpg'

function AllRestaraunts() {

  const myStyle={
    
      width: '100%',
      height: '100vh',
      backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),url(../../assets/{restaraunt.jpg})',
      backgroundSize: 'cover',
      backgroundPosition:'center',
  
 
};
  return (

    <div style={myStyle}>
      all restaraunts
    </div>
  )
}

export default AllRestaraunts