import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      toast.error("Please enter a search term!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    onSubmit(searchTerm.trim());
    setSearchTerm("");
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images..."
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
