import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPictures } from "./Api/Api";
import ImageGallery from "./ImageGallery/ImageGallery";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function App() {
  const [pictures, setPictures] = useState([]); //Зберігання списку зображень//
  const [isLoading, setIsLoading] = useState(false); //Для відображення контенту//
  const [error, setError] = useState(false); //Для відображення помилки//
  const [page, setPage] = useState(1); //Зберігання поточноі сторінки//
  const [query, setQuery] = useState(""); //Для зберігання пошукового запиту//
  const [selectedPicture, setSelectedPicture] = useState(""); //Для зберігання вибраного зображення для модалки//
  const [loadingMore, setLoadingMore] = useState(false); //Для відображення додаткового контенту//

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchPictures(query, page);
        setIsLoading(false);
        setPictures((prev) => [...prev, ...data.results]);
      } catch {
        setError(true);
        setError("Failed to fetch images. Please try again.");
      } finally {
        setIsLoading(false);
        setLoadingMore(false);
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
  }; // Видалення минулих картинок, сторінки при сабміті//

  const handleCloseModal = () => {
    setSelectedPicture(null);
  };

  return (
    <>
      <header>
        <SearchBar onSubmit={handleSearchSubmit} />
      </header>
      {isLoading && !loadingMore && <Loader />}
      {!!pictures.length && (
        <ImageGallery pictures={pictures} onPictureClick={handlePictureClick} />
      )}
      {isLoading && !loadingMore && <Loader />}
      {error && <ErrorMessage message={error} />}
      {loadingMore ? (
        <Loader />
      ) : (
        pictures.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedPicture && (
        <ImageModal picture={selectedPicture} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
