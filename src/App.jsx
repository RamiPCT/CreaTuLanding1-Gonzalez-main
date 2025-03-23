import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Products from "./components/layout/Products/Products";
import ProductDetail from "./components/pages/productDetail/ProductDetail";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import CartProvider from "./context/CartContext"; // Asegúrate de importar CartProvider
import Cart from "./components/pages/cart/Cart";
import SearchResults from "./components/pages/searchResults/SeachResults";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/buscar" element={<SearchResults />}></Route>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
