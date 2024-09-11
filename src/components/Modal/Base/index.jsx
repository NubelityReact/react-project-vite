import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./modal.base.styles.module.css";
import clsx from "clsx";

const Modal = (props) => {
  const { isOpen, nodeId = "menu", ...rest } = props;
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (modalRef.current) {
        setTimeout(() => {
          document.body.style.minHeight = modalRef.current.height + "px";
          document.body.style.height = modalRef.current.height + "px";
        }, 200);
      }
      // document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "initial";
      document.body.style.height = "initial";
      document.body.style.minHeight = "initial";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalChildren ref={modalRef} {...rest} />,
    document.getElementById(nodeId),
  );
};

const ModalChildren = forwardRef(function ModalChildren(
  { children, onClose, containerStyles, contentStyles },
  ref,
) {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(null);
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const value = containerRef.current.clientHeight;
      setHeight(value);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    height: height,
  }));

  return (
    <div
      ref={containerRef}
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
});

export default Modal;
