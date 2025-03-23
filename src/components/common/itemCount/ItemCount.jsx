import { useState } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd, setQuantity }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      const newCount = count + 1;
      setCount(newCount);
      setQuantity(newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      setQuantity(newCount);
    }
  };

  return (
    <div className={styles.countContainer}>
      <div className={styles.controls}>
        <button
          onClick={handleDecrement}
          className={styles.button}
          disabled={count <= 1}
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          onClick={handleIncrement}
          className={styles.button}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        className={styles.addButton}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : `Agregar al carrito`}
      </button>
    </div>
  );
};

export default ItemCount;
