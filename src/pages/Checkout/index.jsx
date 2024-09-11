import { useRef } from "react";
import GoBack from "../../components/Button/GoBack";
import Summary from "../../components/Card/Summary";
import FormCheckout from "../../components/Containers/Form/CheckoutForm";

const CheckoutPage = () => {
  const formRef = useRef(null);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.validate();
    }
  };
  return (
    <main>
      <GoBack />
      <FormCheckout ref={formRef} />

      <Summary onSubmit={handleSubmit} />
    </main>
  );
};

export default CheckoutPage;
