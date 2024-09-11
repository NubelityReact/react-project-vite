import Typography from "../../Typography";
import SummaryItem from "../SummaryItem";
import Button from "../../Button/Base";
import styles from "./summary.styles.module.css";
import { formatMoney } from "../../../utils/formatMoney";
import { useCart } from "../../../contexts/cart.context";

const Summary = (props) => {
  const cartState = useCart();
  return (
    <div className={styles.container}>
      <Typography variant="h6">summary</Typography>

      <div className={styles.products}>
        {cartState.state.productWithQuantities.map((item) => {
          return (
            <SummaryItem key={JSON.stringify(item)} {...item.product}>
              <Typography>x{item.quantity}</Typography>
            </SummaryItem>
          );
        })}
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Typography as="span">total</Typography>
          <Typography as="span">
            {formatMoney(cartState.state.subtotal)}
          </Typography>
        </li>
        <li className={styles.listItem}>
          <Typography as="span">shipping</Typography>
          <Typography as="span">
            {formatMoney(cartState.state.shipping)}
          </Typography>
        </li>
        <li className={styles.listItem}>
          <Typography as="span">vat (included)</Typography>
          <Typography as="span">{formatMoney(cartState.state.vat)}</Typography>
        </li>
        <li className={styles.listItem}>
          <Typography as="span">grand total</Typography>
          <Typography as="span" className={"orange"}>
            {formatMoney(cartState.state.total)}
          </Typography>
        </li>
      </ul>

      <Button onClick={props.onSubmit}>
        <Typography variant="subtitle">Continue and pay</Typography>
      </Button>
    </div>
  );
};

export default Summary;
