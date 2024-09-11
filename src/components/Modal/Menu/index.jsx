import Modal from "../Base";
import CategoryNavigation from "../../Containers/CategoryNavigation";
import styles from "./modal.menu.styles.module.css";
import { links } from "../../Containers/CategoryNavigation/links-data";

const ModalMenu = (props) => {
  return (
    <Modal
      {...props}
      containerStyles={styles.modalContainer}
      contentStyles={styles.modalContent}
    >
      <CategoryNavigation cards={links} />
    </Modal>
  );
};

export default ModalMenu;
