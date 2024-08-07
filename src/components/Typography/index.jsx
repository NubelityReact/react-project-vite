import React from "react";
import PropType from "prop-types";
import styles from "./typography.module.css";
import clsx from "clsx";

const Typography = (props) => {
  const { children, as = "p", variant = "body", className, ...rest } = props;

  return React.createElement(
    as,
    {
      className: clsx(styles[variant], styles.generals, className),
      ...rest,
    },
    children,
  );
};

export default Typography;

Typography.propTypes = {
  as: PropType.string, // p, span, div, h1, h2, h3, h4, h5, h6
  children: PropType.string.isRequired,
  variant: PropType.string, // h1, h2, h3, h4, h5, h6, overline, subtitle, body
  className: PropType.string,
};
