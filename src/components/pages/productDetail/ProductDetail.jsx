import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import ItemCount from "../../common/itemCount/ItemCount";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct({
            id: docSnap.id,
            name: data.nombre,
            price: data.precio,
            category: data.categoria,
            image: data.imagen,
            stock: data.stock,
            description: data.descripcion || "Descripción no disponible",
          });
        } else {
          setError("Producto no encontrado");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Cargando producto...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.mainImage}
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
          }}
        />
      </div>

      <div className={styles.productInfo}>
        <h1 className={styles.productTitle}>{product.name}</h1>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productStock}>
          {product.stock > 0
            ? `${product.stock} disponibles`
            : "Producto agotado"}
        </p>
        <p className={styles.productCategory}>{product.category}</p>
        <p className={styles.productDescription}>{product.description}</p>

        <div className={styles.productActions}>
          <ItemCount
            stock={product.stock}
            initial={1}
            onAdd={(quantity) => console.log("Agregado:", quantity)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
