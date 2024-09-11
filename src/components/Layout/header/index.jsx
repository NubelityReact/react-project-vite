import { useState } from "react";
import styles from "./header.styles.module.css";
import ModalCard from "../../Modal/Cart";
import useViewportMatchSize from "../../../hooks/useViewportMatchSize";
import ModalMenu from "../../Modal/Menu";
import { useNavigate } from "react-router-dom";
import Icon from "../../Icon";
import Logo from "../../Logo";

import TextMenu from "../../Containers/TextMenu";
import { useCart } from "../../../contexts/cart.context";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  // const cartState = useSelector((state: RootState) => state.cart);
  const cartState = useCart();

  const { match } = useViewportMatchSize("desktop");

  const router = useNavigate();

  const handleNavigation = () => {
    router("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <div className={styles.supercontainer}>
        <header className={styles.container}>
          <div className={styles.leftColumn}>
            <Icon
              name="burger-icon.svg"
              icon={{ src: "/icons/burger-icon.svg", alt: "menu icon" }}
              onClick={toggleMenu}
            />

            <Logo
              onClick={handleNavigation}
              className={styles.logo}
              id="logoId"
            />
          </div>

          {match && <TextMenu />}

          <Icon
            name="cart.svg"
            icon={{ src: "/icons/cart.svg", alt: "cart" }}
            onClick={openCart}
            n={cartState.totalItems}
            className={styles.cart}
          />
        </header>
      </div>
      <ModalMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <ModalCard isOpen={isCartOpen} onClose={closeCart} nodeId="menu" />
    </>
  );
};

export default Header;
