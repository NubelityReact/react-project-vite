import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.base.styles.module.css";
import clsx from "clsx";

const Modal = (props) => {
  const { isOpen, nodeId = "menu", ...rest } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "initial";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalChildren {...rest} />,
    document.getElementById(nodeId),
  );
};

const ModalChildren = ({
  children,
  onClose,
  containerStyles,
  contentStyles,
}) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(styles.container, containerStyles)}
      onClick={handleBackdropClick}
    >
      <div
        className={clsx(styles.content, contentStyles)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
