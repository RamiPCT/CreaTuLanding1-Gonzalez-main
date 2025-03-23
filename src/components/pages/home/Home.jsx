import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Sección Principal */}
      <section className={styles.hero}>
        <h1>Bienvenido a nuestra tienda</h1>
        <p>Encuentra los mejores productos al mejor precio</p>
        <Link to="/productos" className={styles.button}>
          Ver productos
        </Link>
      </section>

      {/* Productos Destacados */}
      <section className={styles.products}>
        <h2>Productos populares</h2>
        <div className={styles.grid}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={styles.product}>
              <div className={styles.image}></div>
              <h3>Producto {item}</h3>
              <p>$9.999</p>
              <Link to="/productos" className={styles.button}>
                Ver más
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
