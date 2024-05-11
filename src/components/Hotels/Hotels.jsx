import { Link } from 'react-router-dom'
import Loader from '../loader/Loader';
import { useHotels } from '../context/HotelsProvider';

const Hotels = () => {
  const {isLoading, hotels} = useHotels();
   
      if(isLoading) <Loader />

  return (
    <div className="searchList">
        <h2>Search Results ({hotels.length})</h2>
        {hotels.map((item) => {
            return (
                <Link to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
                key={item.id}>
                    <div className="searchItem">
                    <img src={item.thumbnail_url} alt={item.name} />
                    <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                €&nbsp;{item.price}&nbsp;
                <span>night</span>
              </div>
                    </div>
                </Link>
            )
        })
        }
    
    </div>
  )
}

export default Hotels