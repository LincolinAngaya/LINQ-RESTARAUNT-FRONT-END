import React from 'react'
import { useHistory } from 'react-router-dom';

import NewRestarauntForm from './newRestarauntForm'
 import '../../NewRestarauntform.scss'

function NewRestaraunts() {

    const history = useHistory();

    function addRestarauntHandler(restarauntDetails){
        fetch('https://linq-restaraunt.herokuapp.com/restaraunts',
        {
         method:'POST',
         body:JSON.stringify(restarauntDetails),
         headers:{
                'Content-Type':'application/json'
         }
        }
        ).then(() => {
          history.replace('/');
        });
   }

  return (
    <div className='card'>
      <NewRestarauntForm  onAddRestaraunt={addRestarauntHandler} />
  </div>
  )
}

export default NewRestaraunts

