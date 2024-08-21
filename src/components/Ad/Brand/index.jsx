/* eslint-disable react/prop-types */
import Typography from "../../Typography";
import styles from "./ad.brand.styles.module.css";

const AdBrand = (props) => {
  const { img, title, description } = props;

  return (
    <article className={styles.container}>
      <picture className={styles.imgContainer}>
        <img {...img} alt={img.alt} className={styles.img} />
      </picture>

      <Typography variant="h4" className={styles.title}>
        {title}
      </Typography>

      <Typography className={styles.description}>{description}</Typography>
    </article>
  );
};

export default AdBrand;
