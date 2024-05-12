import { createContext, useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-hot-toast";

const BookmarkContext = createContext();

const BookmarkListProvider = ({ children }) => {
    const [currentBookmark, setCurrentBookmark] = useState(null);
  const [isLoadingCurrBookmark, setIsLoadinCurrBookmark] = useState(false);
 

  const { isLoading, data: bookmarks } = useFetch(
    "http://localhost:5000/bookmarks"
  );

  async function getBookmark(id) {
    setIsLoadinCurrBookmark(true);
    setCurrentBookmark(null);
    try {
      const { data } = await axios.get(`${"http://localhost:5000/bookmarks"}/${id}`);
      setCurrentBookmark(data);
      setIsLoadinCurrBookmark(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadinCurrBookmark(false);
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        currentBookmark,
        getBookmark,
        isLoadingCurrBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkListProvider

export function useBookmark() {
    return useContext(BookmarkContext);
  }