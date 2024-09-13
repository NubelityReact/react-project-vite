import PropTypes from "prop-types";
import Typography from "../../Typography";
import Button from "../../Button/Base";
import { Link } from "react-router-dom";
import styles from "./card.product.styles.module.css";
import ResponsiveImage from "../../ResponsiveImage";
import useViewportMatchSize from "../../../hooks/useViewportMatchSize";

const CardProduct = (props) => {
  const { isOdd, image, name, isNew = false, description, url } = props;
  const match = useViewportMatchSize("desktop");

  return (
    <article
      className={styles.container}
      style={{
        flexDirection: isOdd ? (match ? "row-reverse" : "row") : "initial",
      }}
    >
      <ResponsiveImage image={image} className={styles.imgContainer} />
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
