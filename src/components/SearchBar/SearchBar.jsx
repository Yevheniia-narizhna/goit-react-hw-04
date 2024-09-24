import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

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
      <header>
        <form className={s.form} onSubmit={handleSearchSubmit}>
          <input
            className={s.input}
            type="text"
            id="search-input"
            name="searchQuery"
            value={query}
            onChange={handleInput}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
}
// import { Field, Form, Formik } from "formik";
// import toast from "react-hot-toast";

// export default function SearchBar({ setQuery }) {
//   const initialValues = {
//     query: "",
//   };
//   const handleSubmit = (values, options) => {
//     const searchFormat = values.query.trim().toLowerCase();
//     if (!searchFormat) {
//       toast.error("Please enter a search query.");
//       return;
//     }
//     setQuery(searchFormat);
//     options.resetForm();
//   };
//   return (
//     <>
//       <header>
//         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//           <Form>
//             <Field
//               type="text"
//               name="search"
//               autocomplete="off"
//               autofocus
//               placeholder="Search images and photos"
//             />
//             <button type="submit">Search</button>
//           </Form>
//         </Formik>
//       </header>
//     </>
//   );
// }
