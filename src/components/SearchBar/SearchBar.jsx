import { useState } from "react";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleInput = (event) => {
    setQuery(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(query);
    setQuery("");
  };
  return (
    <div>
      <header onSubmit={handleSearchSubmit}>
        <form>
          <input
            type="text"
            id="search-input"
            name="searchQuery"
            value={query}
            onChange={handleInput}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
}
