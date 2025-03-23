import { Link } from "react-router-dom";
import SearchBar from "../../common/searchBar/SearchBar";
import styles from "./navbar.module.css";
import CartWidget from "../../common/cartwidget/CartWidget";


const Navbar = () => {


  return (
    <nav className={styles.navBar}>
      <SearchBar className={styles.searchBar} />
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/productos" className={styles.navLink}>
          Products
        </Link>
        <CartWidget className={styles.cartWidget} />
      </div>
    </nav>
  );
};

export default Navbar;
