import PropTypes from "prop-types";
import Typography from "../../Typography";
import Button from "../../Button/Base";
import { Link } from "react-router-dom";
import styles from "./card.product.styles.module.css";

const CardProduct = (props) => {
  const { image, name, isNew = false, description, url } = props;

  return (
    <article className={styles.container}>
      <picture className={styles.imgContainer}>
        <img
          className={styles.img}
          src={image}
          alt={`image of product ${name}`}
        />
      </picture>
      <div className={styles.content}>
        {isNew && (
          <Typography className={styles.isNew} variant={"overline"}>
            new product
          </Typography>
        )}

        <Typography as="h2" variant="h4">
          {name}
        </Typography>

        <Typography className={styles.description}>{description}</Typography>
        <Link to={url}>
          <Button>see product</Button>
        </Link>
      </div>
    </article>
  );
};

export default CardProduct;

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
