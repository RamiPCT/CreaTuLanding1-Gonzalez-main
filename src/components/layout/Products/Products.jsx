import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import ProductCard from "../../common/productCard/ProductCard";
import styles from "./products.module.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Categorías reales de tu Firestore (verifica los nombres exactos)
  const categories = {
    all: "Todos",
    shorts: "Shorts",
    remeras: "Remeras",
    pantalones: "Pantalones",
    buzos: "Buzos",
    calzado: "Calzado",
    camperas: "Camperas",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const productsRef = collection(db, "products");
        const q =
          selectedCategory === "all"
            ? productsRef
            : query(productsRef, where("categoria", "==", selectedCategory));

        const querySnapshot = await getDocs(q);

        const productsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.nombre, // Campo en español mapeado a inglés
            price: data.precio,
            category: data.categoria,
            image: data.imagen,
            stock: data.stock,
          };
        });

        if (productsData.length === 0) {
          setError(`No hay productos en ${categories[selectedCategory]}`);
        }

        setProducts(productsData);
      } catch (err) {
        console.error("Error cargando productos:", err);
        setError("Error al cargar productos. Intenta recargar la página");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.title}>Catálogo de Productos</h2>

      <div className={styles.filterButtons}>
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleCategoryChange(key)}
            className={`${styles.filterBtn} ${
              selectedCategory === key ? styles.active : ""
            }`}
            disabled={loading}
          >
            {value}
          </button>
        ))}
      </div>

      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Cargando productos...</p>
        </div>
      ) : error ? (
        <div className={styles.error}>
          <p>⚠️ {error}</p>
          <button
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Recargar página
          </button>
        </div>
      ) : (
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                image: product.image || "/default-product-image.png",
                stock: product.stock || 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
