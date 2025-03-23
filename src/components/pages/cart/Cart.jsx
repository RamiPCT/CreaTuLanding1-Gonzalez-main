import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart, handleDelete } = useContext(CartContext);

  return (
    <div className={styles.cartPageContainer}>
      <h2 className={styles.cartPageTitle}>Carrito de Compras</h2>

      {cart.length === 0 ? (
        <div className={styles.cartPageEmpty}>
          <p>El carrito está vacío</p>
          <Link to="/productos" className={styles.cartPageShopButton}>
            Ir a productos
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartPageItem}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.cartPageItemImage}
              />
              <div className={styles.cartPageItemDetails}>
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className={styles.cartPageButton}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
