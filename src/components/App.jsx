import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPictures } from "./Api/Api";
import ImageGallery from "./ImageGallery/ImageGallery";

function App() {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPictures(query, page);
        setIsLoading(false);
        setPictures(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, [query, page]);
  return (
    <>
      <SearchBar />
      {!!pictures.length && <ImageGallery pictures={pictures} />}
      {isLoading && <h2>Loading...</h2>}
    </>
  );
}

export default App;
