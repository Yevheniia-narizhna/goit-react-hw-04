import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPictures } from "./Api/Api";
import ImageGallery from "./ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedPicture, setSelectedPicture] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPictures(query, page);
        setIsLoading(false);
        setPictures((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handlePictureClick = (picture) => {
    setSelectedPicture(picture);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setPage((prev) => prev + 1);
  };
  const handleSearchSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setPictures([]);
  };
  const handleCloseModal = () => {
    setSelectedPicture(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {!!pictures.length && (
        <ImageGallery pictures={pictures} onPictureClick={handlePictureClick} />
      )}
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong</h2>}
      <button onClick={handleLoadMore}>Load more</button>
      {selectedPicture && (
        <ImageModal picture={selectedPicture} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
