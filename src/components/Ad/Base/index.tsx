import React from "react";
import { Image, withHTMLAttrs } from "../../../customTypes/utils";
import Typography from "../../Typography";
import { Link } from "react-router-dom";
import Button from "../../Button/Base";
import styles from "./add.styles.module.css";
import clsx from "clsx";

type IAdProps =
  | {
      title: string;
      heading?: "h2" | "h3" | "h4";
      description: string;
      href: string;
      textButton?: string;
      img: Image;
      type: "A";
    }
  | {
      title: string;
      heading?: "h2" | "h3" | "h4";
      description?: never;
      href: string;
      textButton?: string;
      img: Image;
      type: "B" | "C";
    };

const Ad: React.FC<withHTMLAttrs<IAdProps>> = (props) => {
  const {
    type,
    img,
    title,
    heading = "h3",
    textButton = "see product",
    description,
    href,
    className,
    ...rest
  } = props;

  return (
    <article
      className={clsx(styles.container, styles["container" + type], className)}
      {...rest}
    >
      <picture className={styles["imgContainer" + type]}>
        <img {...img} alt={img.alt} className={styles.img} />
      </picture>
      <div className={clsx(styles.content, styles["content" + type])}>
        <Typography
          as={heading}
          variant="h4"
          className={clsx(type === "A" && styles.titleA)}
        >
          {title}
        </Typography>
        {description && <Typography>{description}</Typography>}
        <Link to={href} className={styles.link}>
          <Button
            variant="outlined"
            className={clsx(styles.button, styles["button" + type])}
          >
            <Typography variant="subtitle">{textButton}</Typography>
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default Ad;
