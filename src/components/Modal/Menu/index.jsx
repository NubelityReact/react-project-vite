import Modal from "../Base";
import CategoryNavigation from "../../Containers/CategoryNavigation";
import styles from "./modal.menu.styles.module.css";

const ModalMenu = (props) => {
  return (
    <Modal
      {...props}
      containerStyles={styles.modalContainer}
      contentStyles={styles.modalContent}
    >
      <CategoryNavigation />
    </Modal>
  );
};

export default ModalMenu;
