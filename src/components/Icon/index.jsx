import clsx from "clsx";
import styles from "./icon.module.css";
import PropTypes from "prop-types";

const Icon = (props) => {
  const { name, alt, number, height, width, className, style, ...rest } = props;

  return (
    <div
      className={clsx(styles.container, className)}
      style={{ height: props.height ?? 23, ...style }}
      {...rest}
    >
      {number !== undefined && <span className={styles.number}>{number}</span>}
      <img
        className={styles.icon}
        src={`/icons/${name}`}
        alt={alt}
        height={height ?? 23}
        width={width ?? 20}
      />
    </div>
  );
};

export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  number: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.string,
};
