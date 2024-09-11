import Modal from "../Base";
import OrderConfirmation from "../../Card/OrderConfirmation";
import styles from "./moda.order.confirmation.styles.module.css";

const ModalOrderConfirmation = (props) => {
  return (
    <Modal
      {...props}
      containerStyles={styles.overlay}
      contentStyles={styles.content}
    >
      <OrderConfirmation btnCb={props.onClose} />
    </Modal>
  );
};

export default ModalOrderConfirmation;
