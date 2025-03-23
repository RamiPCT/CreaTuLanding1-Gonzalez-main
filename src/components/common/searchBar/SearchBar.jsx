// SearchBar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/buscar?query=${searchText}`);
    }
  };

  return (
    <div className={styles.containerSearch}>
      <input
        className={styles.searchBar}
        onKeyDown={handleKeyPress}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Buscar productos, marcas y más..."
        aria-label="Buscar"
      />
      <button
        onClick={handleSearch}
        className={styles.searchButton}
        aria-label="Buscar"
      >
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
