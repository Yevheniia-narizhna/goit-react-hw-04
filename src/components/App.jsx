import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";

function App() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      console.log(data.hits);
      setPictures(data.hits);
    };
    getData();
  }, []);
  return (
    <>
      <SearchBar />
      <ul>
        {" "}
        {pictures.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}> {item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
