import ReactCountryFlag from "react-country-flag";
import Loader from "../Loader/Loader";
import { useBookmark } from "../context/BookmarkListContext";
import { Link } from "react-router-dom";


const Bookmark = () => {
   const { isLoading, bookmarks, currentBookmark } = useBookmark();

   if (isLoading) <Loader />
  return (
    <div>
        <h2>Bookmark List</h2>
        <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link
              key={item.id}
              to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div
              className={`bookmarkItem ${item.id === currentBookmark ?.id ? "current-bookmark" : "" }`}
              >
                <div>
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  &nbsp; <strong>{item.cityName}</strong> &nbsp;
                  <span>{item.country}</span>
                </div>
                {/* <button onClick={(e) => handleDelete(e, item.id)}>
                  <HiTrash className="trash" />
                </button> */}
              </div>
              </Link>
          );
        })}
        </div>
        
    </div>
  )
}

export default Bookmark