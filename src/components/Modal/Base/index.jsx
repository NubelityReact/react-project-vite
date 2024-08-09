import { createPortal } from "react-dom";
import styles from "./modal.styles.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const Modal = (props) => {
  const { children, htmlId = "menu", ...rest } = props;

  return createPortal(
    <ModalChildren {...rest}>{children}</ModalChildren>,
    document.getElementById(htmlId),
  );
};

export default Modal;

const ModalChildren = (props) => {
  const { children, classContainer, classContent, isOpen, onClose, ...rest } =
    props;

  return (
    <div
      onClick={onClose}
      className={clsx(
        styles.container,
        classContainer,
        !isOpen && styles.hideContainer,
      )}
      {...rest}
    >
      <div className={clsx(styles.content, classContent)}>{children}</div>
    </div>
  );
};

ModalChildren.propTypes = {
  children: PropTypes.element,
  classContainer: PropTypes.string,
  classContent: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
