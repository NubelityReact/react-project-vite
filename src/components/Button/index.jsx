import PropType from "prop-types";
import styles from "./button.module.css";
import clsx from "clsx";
import Typography from "../Typography";

const Button = (props) => {
  const {
    children,
    href,
    variant = "contained",
    icon = "/icon-chevron.svg",
  } = props;

  const changeRoute = () => {};

  return (
    <button
      className={clsx(styles.container, styles[variant])}
      onClick={() => changeRoute(href)}
    >
      <Typography as="span" variant={"subtitle"}>
        {children}
      </Typography>
      {variant === "link" && <img src={icon} alt="" />}
    </button>
  );
};

Button.propTypes = {
  variant: PropType.string, // contained, outlined, link
  children: PropType.string.isRequired,
  href: PropType.string,
  icon: PropType.string,
};

export default Button;
