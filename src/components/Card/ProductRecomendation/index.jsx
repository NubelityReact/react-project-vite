/* eslint-disable react/prop-types */
import Typography from "../../Typography";
import { Link } from "react-router-dom";
import Button from "../../Button/Base";
import styles from "./product.recommendation.styles.module.css";

const ProductRecommendation = (props) => {
  const { productId, product } = props;

  return (
    <article className={styles.container}>
      <picture className={styles.imgContainer}>
        <img
          src={product.image.mobile}
          alt={product.name}
          className={styles.img}
        />
      </picture>

      <Typography as="h4">{product.name}</Typography>

      <Link to={`/product-details/${productId}`}>
        <Button>
          <Typography variant="subtitle">see product</Typography>
        </Button>
      </Link>
    </article>
  );
};

export default ProductRecommendation;
