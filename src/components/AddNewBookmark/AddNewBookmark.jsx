import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useUrlLocation from '../../hooks/useUrlLocation';
import ReactCountryFlag from 'react-country-flag';
import axios from "axios";
import Loader from "../Loader/Loader";

const BASE_GEOCODING_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

const AddNewBookmark = () => {
    const [lat, lng] = useUrlLocation();
   const navigate = useNavigate();
   const [cityName, setCityName] = useState("");
   const [country, setCountry] = useState("");
   const [countryCode, setCountryCode] = useState("");
   const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
   const [geoCodingError, setGeoCodingError] = useState(null);

   useEffect(() => {
      if (!lat || !lng) return;
  
      async function fetchLocationData() {
        setIsLoadingGeoCoding(true);
        setGeoCodingError(null);
        try {
          const { data } = await axios.get(
            `${BASE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`
          );
  
          if (!data.countryCode)
            throw new Error(
              "this location is not a city! please click somewhere else."
            );
  
          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setCountryCode(data.countryCode); // FR, IR ,...
        } catch (error) {
          setGeoCodingError(error.message);
        } finally {
          setIsLoadingGeoCoding(false);
        }
      }
      fetchLocationData();
    }, [lat, lng]);

    if (isLoadingGeoCoding) return <Loader />;
  if (geoCodingError) return <storng>{geoCodingError}</storng>;

  return (
    <div>
        <h2>Bookmark New Location</h2>
        <form className='form'>
         <div className='formControl'>
            <label htmlFor='cityName'>CityName</label>
            <input type='text' name='cityName' id='cityName'
            value={cityName} onChange={(e) => setCityName(e.target.value)}
             />
         </div>
         <div className='formControl'>
            <label htmlFor='Country'>Country</label>
            <input type='text' name='Country' id='Country'
            value={country} onChange={(e) => setCountry(e.target.value)}
             />
            <ReactCountryFlag className="flag" svg countryCode={countryCode} />
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