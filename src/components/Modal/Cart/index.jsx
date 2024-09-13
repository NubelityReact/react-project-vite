import Modal from "../Base";
import styles from "./modal.cart.styles.module.css";
import CartSummary from "../../Card/CartSummary";

const ModalCart = (props) => {
  return (
    <Modal
      {...props}
      containerStyles={styles.overlay}
      contentStyles={styles.contentStyles}
    >
      <CartSummary btnCb={props.onClose} />
    </Modal>
  );
};

export default ModalCart;
