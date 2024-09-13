import { useRef } from "react";
import GoBack from "../../components/Button/GoBack";
import Summary from "../../components/Card/Summary";
import FormCheckout from "../../components/Containers/Form/CheckoutForm";
import styles from "./pages.checkout.styles.module.css";

const CheckoutPage = () => {
  const formRef = useRef(null);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.validate();
    }
  };
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
