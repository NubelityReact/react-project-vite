import Typography from "../../Typography";
import styles from "./cart.summary.styles.module.css";
import Counter from "../../Counter";
import SummaryItem from "../SummaryItem";
import { Link } from "react-router-dom";
import Button from "../../Button/Base";
import { useCart } from "../../../contexts/cart.context";

const CartSummary = (props) => {
  const cartState = useCart();

  const handleDeleteAll = () => {};

  const handleIncrease = () => {};

  const handleDecrease = () => {};

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography>CART {cartState.state.totalItemsInCart}</Typography>
        <Typography onClick={handleDeleteAll}>Remove all</Typography>
      </header>

      <div className={styles.products}>
        {(cartState.state?.productWithQuantities ?? []).map((item) => {
          return (
            <SummaryItem key={item.product.id} {...item.product}>
              <Counter
                onIncrease={() => handleIncrease(item.product)}
                onDecrease={() => handleDecrease(item.product)}
                counter={item.amount}
              />
            </SummaryItem>
          );
        })}
      </div>

      <div className={styles.total}>
        <Typography>TOTAL</Typography>
        <Typography>${cartState.subtotal}</Typography>
      </div>

      <Link
        to={"/checkout"}
        className={styles.link}
        onClick={() => props.btnCb && props.btnCb()}
      >
        <Button variant="primary">
          <Typography variant="subtitle">checkout</Typography>
        </Button>
      </Link>
    </div>
  );
};

export default CartSummary;
