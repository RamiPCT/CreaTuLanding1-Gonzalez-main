import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Ícono de carrito
import styles from "./cartWidget.module.css"; // Archivo de estilos
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular el número total de productos (sumando las cantidades de cada uno)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className={styles.cartContainer}>
      <ShoppingCart className={styles.cartIcon} />
      {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;
