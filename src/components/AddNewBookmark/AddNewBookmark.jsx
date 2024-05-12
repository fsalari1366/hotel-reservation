import React from 'react'
import { useNavigate } from 'react-router-dom'
import useUrlLocation from '../../hooks/useUrlLocation';

const AddNewBookmark = () => {
    const [lat, lng] = useUrlLocation();
   const navigate = useNavigate();
  return (
    <div>
        <h2>Bookmark New Location</h2>
        <form className='form'>
         <div className='formControl'>
            <label htmlFor='cityName'>CityName</label>
            <input type='text' name='cityName' id='cityName' />
         </div>
         <div className='formControl'>
            <label htmlFor='Country'>Country</label>
            <input type='text' name='Country' id='Country' />
         </div>
         <div className='buttons'>
            <button className='btn btn--back' onClick={(e) => {
             e.preventDefault();
             navigate(-1);
            }}>&larr; Back</button>
            <button className='btn btn--primary'>Add</button>
         </div>
        </form>
    </div>
  )
}

export default AddNewBookmark