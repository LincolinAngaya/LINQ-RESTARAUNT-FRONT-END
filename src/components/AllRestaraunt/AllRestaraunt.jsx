import { AutoComplete } from 'antd';
import React from 'react'

import '../AllRestaraunt/AllRestaraunt.scss'

 import RestarauntItem from '../card/RestarauntItem';

function AllRestaraunts() {


const heading = {
  color:"blue",
  fontSize:"2.4rem",
  padding:"9px"

}
const restarauntlist ={
   width:"70vw",
   margin: "0 Auto",
   padding:"2rem ",
   background:"red",


}
  return (
    <>
    <h1 style={heading}>All Restaraunts</h1> 
    <div style={restarauntlist}>
     
     <RestarauntItem />
    
    </div>
    </>
  )
}

export default AllRestaraunts