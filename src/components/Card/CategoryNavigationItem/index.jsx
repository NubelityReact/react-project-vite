import { useEffect, useRef, useState } from "react";
import Button from "../../Button";
import Typography from "../../Typography";
import styles from "./category-navigation-item.styles.module.css";
import PropTypes from "prop-types";

const CardCategoryNavigationItem = (props) => {
  const { img, title } = props;

  const [pictureHeight, setPictureHeight] = useState(img.height ?? 0);

  const pictureRef = useRef(null);
  // document.getElementById("id del nodo")

  useEffect(() => {
    if (!pictureRef.current === null) {
      const height = pictureRef.current.clientHeight;
      setPictureHeight(height);
    }
  }, []);

  return (
    <article className={styles.container}>
      <picture className={styles.imgContainer}>
        <img
          ref={pictureRef}
          className={styles.img}
          src={img?.src}
          alt={img?.alt}
          width={img?.width}
          height={img?.height}
        />
      </picture>
      <div
        className={styles.content}
        style={{ marginBlockStart: pictureHeight / 2 }}
      >
        <Typography variant={"h6"}>{title}</Typography>
        <Button style={{ margin: "0 auto" }} variant={"link"}>
          shop
        </Button>
      </div>
    </article>
  );
};

export default CardCategoryNavigationItem;

CardCategoryNavigationItem.propTypes = {
  img: PropTypes.object,
  "img.height": PropTypes.number,
  "img.src": PropTypes.string,
  "img.width": PropTypes.number,
  "img.alt": PropTypes.string,
  title: PropTypes.string,
};
