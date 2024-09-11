import PropType from "prop-types";
import styles from "./button.module.css";
import clsx from "clsx";
import Typography from "../../Typography";

const Button = (props) => {
  const {
    children,
    href,
    variant = "contained",
    icon = "/icon-chevron.svg",
    className,
    ...rest
  } = props;

  const changeRoute = () => {};

  return (
    <button
      className={clsx(styles.container, styles[variant], className)}
      onClick={() => changeRoute(href)}
      {...rest}
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
  children: PropType.node.isRequired,
  href: PropType.string,
  icon: PropType.string,
};

export default Button;
