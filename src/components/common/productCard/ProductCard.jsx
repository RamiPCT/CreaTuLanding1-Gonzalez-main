import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [showCount, setShowCount] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
    setShowCount(false);
  };

  return (
    <div className={styles.card}>
      <Link
        to={`/producto/${product.id}`}
        className={styles.imageContainer}
        aria-label={`Ver detalles de ${product.name}`}
      >
        <img
          src={product.image || "/placeholder-product.jpg"}
          alt={product.name}
          className={styles.image}
          onError={(e) => {
            e.target.src = "/placeholder-product.jpg";
          }}
        />
      </Link>

      <div className={styles.info}>
        <Link to={`/producto/${product.id}`} className={styles.textLink}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.category}>{product.category}</p>
        </Link>

        <div className={styles.priceContainer}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.stock}>
            {product.stock > 0 ? `${product.stock} disponibles` : "Agotado"}
          </span>
        </div>

        {product.stock > 0 ? (
          showCount ? (
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={handleAddToCart}
              setQuantity={setQuantity}
            />
          ) : (
            <div className={styles.actions}>
              <Link to="/cart" className={styles.cartButton}>
                Ver carrito ({quantity})
              </Link>
              <button
                onClick={() => setShowCount(true)}
                className={styles.changeButton}
              >
                Cambiar cantidad
              </button>
            </div>
          )
        ) : (
          <p className={styles.noStock}>No disponible</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
