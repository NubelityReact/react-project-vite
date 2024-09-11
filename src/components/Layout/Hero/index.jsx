import Typography from "../../Typography";
import Button from "../../Button/Base";
import { Link } from "react-router-dom";
import styles from "./hero.styles.module.css";

const Hero = (props) => {
  const { img, title, paragraph, href, subtitle = "new product" } = props;
  return (
    <article className={styles.container}>
      <picture className={styles.imgContainer}>
        <img {...img} className={styles.img} />
      </picture>

      <div className={styles.content}>
        <Typography variant="overline" className={styles.subtitle}>
          {subtitle}
        </Typography>
        <Typography className={styles.title} as="h1">
          {title}
        </Typography>

        <Typography className={styles.paragraph}>{paragraph}</Typography>

        <Link to={href} className={styles.link}>
          <Button variant="contained">
            <Typography variant="subtitle">see product</Typography>
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default Hero;
