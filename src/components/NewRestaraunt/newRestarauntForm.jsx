import React from 'react'
import {useRef} from 'react'
import '../../NewRestarauntform.scss'


function NewRestarauntForm(props) {


    const imageInputRef = useRef();
    const nameInputRef = useRef();
    const locationInputRef = useRef();
    const phoneNoInputRef = useRef();
    const descriptionInputRef = useRef();
    



    function submitHandler(e){
        e.preventDefault();

         const enteredImage = imageInputRef.current.value;
         const enteredName = nameInputRef.current.value;
         const enteredLocation = locationInputRef.current.value;
         const enteredPhoneNumber = phoneNoInputRef.current.value;
         const enteredDescription = descriptionInputRef.current.value;
      
         const restarauntDetails={
             image_url:enteredImage,
             name:enteredName,
             location:enteredLocation,
             phone_number:enteredPhoneNumber,
             description:enteredDescription,
         };

         props.onAddRestaraunt(restarauntDetails)
 }

  return (
    <form className='form' onSubmit={submitHandler} >
    <div className='control'>
            <label htmlFor='image'>Restaraunt Image</label>
            <input type="url"  required id="image"  ref={imageInputRef} />
     </div>
    <div className='control'>
            <label htmlFor='text'>Restaraunt Name</label>
            <input type="text"  required id="name"ref={nameInputRef} />
        </div>
        <div className='control'>
            <label htmlFor='location'>Restaraunt Location</label>
            <input type="text"  required id="location" ref={locationInputRef}  />
        </div>
        <div className='control'>
            <label htmlFor='number'>Phone Number</label>
            <input type="text"  required id="number" ref={phoneNoInputRef}  />
        </div>
        <div className='control'>
            <label htmlFor='description'>Restaraunt Description</label>
            <textarea id="description" required rows='5'   ref={descriptionInputRef} />
        </div>
        <div className='actions'>
            <button>Add New Restaraunt</button>
        </div>
    </form>
  )
}

export default NewRestarauntForm