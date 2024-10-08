import Typography from "../../Typography";
import styles from "./cart.summary.styles.module.css";
import Counter from "../../Counter";
import SummaryItem from "../SummaryItem";
import { Link } from "react-router-dom";
import Button from "../../Button/Base";
import { useCart } from "../../../contexts/cart.context";

const CartSummary = (props) => {
  const cartState = useCart();

  const handleDeleteAll = () => {
    cartState.clearCart();
  };

  const handleIncrease = (product) => {
    cartState.addProduct({ product, quantity: 1 });
  };

  const handleDecrease = (product) => {
    cartState.removeProduct(product.id);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography variant="h6">
          CART ({cartState.state.totalItemsInCart})
        </Typography>
        <Typography onClick={handleDeleteAll}>Remove all</Typography>
      </header>

      <div className={styles.products}>
        {(cartState.state?.productWithQuantities ?? []).map((item) => {
          return (
            <SummaryItem key={item.product.id} {...item.product}>
              <Counter
                onIncrease={() => handleIncrease(item.product)}
                onDecrease={() => handleDecrease(item.product)}
                counter={item.quantity}
                className={styles.counter}
              />
            </SummaryItem>
          );
        })}
      </div>

      <div className={styles.total}>
        <Typography>TOTAL</Typography>
        <Typography>${cartState.state.subtotal}</Typography>
      </div>

      <Link
        to={"/checkout"}
        className={styles.link}
        onClick={() => props.btnCb && props.btnCb()}
      >
        <Button>
          <Typography variant="subtitle">checkout</Typography>
        </Button>
      </Link>
    </div>
  );
};

export default CartSummary;
