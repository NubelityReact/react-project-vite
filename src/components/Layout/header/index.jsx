import TextMenu from "../../Containers/TextMenu";
import Icon from "../../Icon";
import Logo from "../../Logo";
import styles from "./header.styles.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Icon name="burger-icon.svg" alt="menu" className={styles.menu} />
      <Logo className={styles.logo} id="logoId" />
      <TextMenu className={styles.textMenu} />
      <Icon number={2} name="cart.svg" alt="carrito" />
    </header>
  );
};

export default Header;
