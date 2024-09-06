import { useParams } from "react-router-dom";
import styles from "./page.product.details.styles.module.css";
import AddProductToCart from "../../components/Card/AddProductToCart";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import AdBrand from "../../components/Ad/Brand";
import GoBack from "../../components/Button/GoBack";
import { useEffect, useState } from "react";
import { endpoints } from "../../mocks/handlers";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id ?? "";

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(endpoints.products.getById(id))
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div className={styles.container}>
      <GoBack style={{ marginBlockEnd: 24 }} />

      <div className={styles.content}>
        <AddProductToCart {...product} />

        <CategoryNavigation />

        <AdBrand
          img={{
            src: "/assets/banner2.png",
            alt: "person listen music with headphones",
          }}
          title={
            <span>
              Bringing you the <span className={"orange"}>best</span> audio gear
            </span>
          }
          description="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
        />
      </div>
    </div>
  );
};

export default ProductDetails;
