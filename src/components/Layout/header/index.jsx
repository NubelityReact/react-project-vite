import TextMenu from "../../Containers/TextMenu";
import Icon from "../../Icon";
import Logo from "../../Logo";
import styles from "./header.styles.module.css";
import CategoryNavigation from "../../Containers/CategoryNavigation";
import { useState } from "react";
import Modal from "../../Modal/Base";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.container}>
      <Icon
        onClick={toggleMenu}
        name="burger-icon.svg"
        alt="menu"
        className={styles.menu}
      />
      <Logo className={styles.logo} id="logoId" />
      <TextMenu className={styles.textMenu} />
      <Icon number={2} name="cart.svg" alt="carrito" />
      <Modal htmlId="cart" isOpen={isMenuOpen} onClose={handleClose}>
        <CategoryNavigation />
      </Modal>
    </header>
  );
};

export default Header;
