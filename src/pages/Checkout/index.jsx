import { useEffect, useRef } from "react";
import GoBack from "../../components/Button/GoBack";
import Summary from "../../components/Card/Summary";
import FormCheckout from "../../components/Containers/Form/CheckoutForm";
import styles from "./pages.checkout.styles.module.css";
import { useCart } from "../../contexts/cart.context";
import Typography from "../../components/Typography";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const formRef = useRef(null);
  const cartState = useCart();
  const isCartEmpty = cartState.state.productWithQuantities.length <= 0;

  const navigate = useNavigate();

  useEffect(() => {
    if (isCartEmpty) {
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }
  }, []);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.validate();
    }
  };

  if (isCartEmpty) {
    return (
      <article>
        <Typography variant="h2">
          No hay productos en el carrito de compras
        </Typography>
        <Typography variant="h4">Redireccionando al home</Typography>
      </article>
    );
  }

  return (
    <main className={styles.main}>
      <GoBack />

      <div className={styles.content}>
        <div className={styles.paper}>
          <FormCheckout ref={formRef} />
        </div>

        <div className={styles.paper}>
          <Summary onSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
