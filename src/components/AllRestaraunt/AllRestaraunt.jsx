import { AutoComplete } from 'antd';
import React from 'react'

import '../AllRestaraunt/AllRestaraunt.scss'

 import RestarauntItem from '../card/RestarauntItem';

function AllRestaraunts() {

  return (
    <>
    <h1 className='heading'>All Restaraunts</h1> 
    <div className='restarauntlist'>
     
     <RestarauntItem />
     <RestarauntItem />
     <RestarauntItem />
     <RestarauntItem />
     <RestarauntItem />
     <RestarauntItem />
    
    </div>
    </>
  )
}

export default AllRestaraunts