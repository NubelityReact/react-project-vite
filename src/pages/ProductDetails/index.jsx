import { useParams } from "react-router-dom";
import styles from "./page.product.details.styles.module.css";
import AddProductToCart from "../../components/Card/AddProductToCart";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import AdBrand from "../../components/Ad/Brand";
import GoBack from "../../components/Button/GoBack";
import products from "../../data/products";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id ?? "";

  // traerlo del estado
  const product = products.find((p) => p.id == id);

  // si no se encuentra se hace una peticion http con un useEffect para llamar al endpoint del producto
  if (!product) {
    return <div>Producto no encontrado</div>;
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
