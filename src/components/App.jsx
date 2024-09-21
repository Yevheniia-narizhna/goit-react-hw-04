import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPictures } from "./Api/Api";
import ImageGallery from "./ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPictures(query, page);
        setIsLoading(false);
        setPictures(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);
  const handleLoadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <SearchBar />
      {!!pictures.length && <ImageGallery pictures={pictures} />}
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong</h2>}
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
}

export default App;
