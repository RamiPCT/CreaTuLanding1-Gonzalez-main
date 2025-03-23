import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import products from "../../data/products";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query") || "";

  useEffect(() => {
    if (searchQuery) {
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchQuery]);

  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.resultsTitle}>
        Resultados para: <span>"{searchQuery}"</span>
      </h1>

      {filteredProducts.length > 0 ? (
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>${product.price}</p>
              <Link
                to={`/producto/${product.id}`}
                className={styles.viewButton}
              >
                Ver Detalles
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>
          <span>😕</span>
          No encontramos productos para "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default SearchResults;
