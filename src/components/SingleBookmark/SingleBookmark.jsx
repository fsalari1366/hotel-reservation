import { useNavigate, useParams } from "react-router-dom";
import { useBookmark } from "../context/BookmarkListContext";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import ReactCountryFlag from "react-country-flag";

const SingleBookmark = () => {
  const { id } = useParams();
  const { getBookmark, isLoading, currentBookmark } = useBookmark();
  const navigate = useNavigate();

  useEffect(() => {
    getBookmark(id);
  }, [id])

  if( isLoading || !currentBookmark) return <Loader />

  const handleBack = () => {
    navigate(-1);
  }
  
  return (
    <div>
        <button onClick={handleBack} className='btn btn--back'> &larr; Back</button>
        <h2>{currentBookmark.cityName}</h2>
        <div className={`bookmarkItem`}>
        <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
        &nbsp; <strong>{currentBookmark.cityName}</strong> &nbsp;
        <span>{currentBookmark.country}</span>
      </div>
    </div>
  )
}

export default SingleBookmark