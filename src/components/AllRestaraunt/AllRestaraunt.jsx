import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'

import '../AllRestaraunt/AllRestaraunt.scss'

 import RestarauntItem from '../card/RestarauntItem';
import NewRestaraunts from '../NewRestaraunt/NewRestaraunt';

function AllRestaraunts() {

  const [isLoading,setIsLoading] = useState(true);
  const [loadedRestaraunts,setLoadedRestaraunts] = useState([]);
  
        useEffect(() => {
           setIsLoading(true)
          fetch('http://localhost:9292/restaraunts')

          .then(response => {
           return response.json();
          })
       
          .then(data => {

            const restaraunts = [];

            for (const key in data){
              const restaraunt = {
                id:key,
                ...data[key]
              };
              restaraunts.push(restaraunt);
            }
             setIsLoading(false);
             setLoadedRestaraunts(restaraunts);
          });
        },[]);


        function handleAddReview(newReview) {
          setLoadedRestaraunts([...loadedRestaraunts, newReview]);
      }
 

   if (isLoading){
    return <section>
      <p>loading......</p>
    </section>
   }



  return (
    <>
    <h1 className='heading'>All Restaraunts</h1> 
    <div className='restarauntlist'>
     
     <RestarauntItem  restaraunts={loadedRestaraunts}/>
  
    
    </div>
    </>
  )
}

export default AllRestaraunts