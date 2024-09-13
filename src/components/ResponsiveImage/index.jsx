import clsx from "clsx";
import { breakpoints } from "../../hooks/useViewportMatchSize";
import styles from "./styles.responsive.image.module.css";
import PropTypes from "prop-types";

const ResponsiveImage = (props) => {
  const { image, name, className } = props;

  const desktop = `(min-width: ${breakpoints.desktop})`;
  const tablet = `(min-width: ${breakpoints.tablet})`;

  return (
    <picture className={clsx(styles.picture, className)}>
      <source media={desktop} srcSet={image.desktop} />
      <source media={tablet} srcSet={image.tablet} />
      <img src={image.mobile} alt={`${name} image`} className={styles.img} />
    </picture>
  );
};

export default ResponsiveImage;

ResponsiveImage.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  "image.desktop": PropTypes.string.isRequired,
  "image.tablet": PropTypes.string.isRequired,
  "image.mobile": PropTypes.string.isRequired,
};
