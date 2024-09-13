import { useForm } from "react-hook-form";
import InputRadio from "../../../Input/Radio";
import InputText from "../../../Input/Text";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useState } from "react";
import ModalOrderConfirmation from "../../../Modal/OrderConfirmation";
import styles from "./checkout.form.styles.module.css";
import Typography from "../../../Typography";
import { regexes } from "../../../../constants/regex.validators";

const paymentOptions = [
  {
    id: "1",
    label: "e-Money",
  },
  {
    id: "2",
    label: "Cash on Delivery",
  },
];
// forwardRef(componente, refencia)

const FormCheckout = forwardRef(function FormCheckout(_, ref) {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: 0,
      city: "",
      country: "",
      paymentOptions: paymentOptions[0].id,
      eMoneyNumber: "",
      eMoneyPIN: "",
    },
  });
  const formRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const paymentMethod = watch("paymentOptions");

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log("datos", data);
    setIsOpen(true);
    window.scrollTo(0, 0);
  };

  useImperativeHandle(ref, () => ({
    validate: handleSubmit(onSubmit),
  }));

  return (
    <div>
      <Typography variant={"h3"}>Checkout</Typography>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant={"h6"}
          className={"orange"}
          style={{ marginBlock: 16 }}
        >
          Billing details
        </Typography>
        <div className={styles.inputs}>
          <InputText
            id="name"
            label="Name"
            error={errors?.name?.message ?? null}
            {...register("name", { required: "Este campo es obligatorio" })}
          />
          <InputText
            id="email"
            label="Email"
            error={errors?.email?.message ?? null}
            {...register("email", {
              required: "Este campo es requerido",
              pattern: {
                value: regexes.email,
                message: "Debe ser un correo válido",
              },
            })}
          />
          <InputText
            id="phone"
            label="Phone Number"
            error={errors?.phone?.message ?? null}
            {...register("phone", {
              required: "Este campo es requerido",
              pattern: {
                value: regexes.phone,
                message: "deben ser 10 dígitos",
              },
              maxLength: {
                value: 10,
                message: "No pueden ser mas de 10 dígitos",
              },
            })}
          />
        </div>

        <Typography
          variant={"h6"}
          className={"orange"}
          style={{ marginBlock: 16 }}
        >
          Shipping info
        </Typography>
        <div className={styles.inputs}>
          <InputText
            id="address"
            label="address"
            error={errors?.address?.message ?? null}
            {...register("address", {
              required: "Este campo es requerido",
            })}
          />
          <InputText
            id="zip"
            label="zip"
            error={errors?.zip?.message ?? null}
            {...register("zip", {
              required: "Este campo es requerido",
            })}
          />
          <InputText
            id="city"
            label="city"
            error={errors?.city?.message ?? null}
            {...register("city", {
              required: "Este campo es requerido",
            })}
          />
          <InputText
            id="country"
            label="country"
            error={errors?.country?.message ?? null}
            {...register("country", {
              required: "Este campo es requerido",
            })}
          />
        </div>

        <Typography
          variant={"h6"}
          className={"orange"}
          style={{ marginBlock: 16 }}
        >
          Payment details
        </Typography>
        <div className={styles.inputs}>
          <InputRadio
            className={styles.inputRadio}
            options={paymentOptions}
            {...register("paymentOptions")}
          />
          {paymentMethod === "1" && (
            <div className={styles.emoney}>
              <InputText
                id="e-Money Number"
                label="e-Money Number"
                error={errors?.eMoneyNumber?.message ?? null}
                {...register("eMoneyNumber", {
                  required: "Este campo es requerido",
                })}
              />
              <InputText
                id="e-Money PIN"
                label="e-Money PIN"
                error={errors?.eMoneyPIN?.message ?? null}
                {...register("eMoneyPIN", {
                  required: "Este campo es requerido",
                })}
              />
            </div>
          )}
        </div>
      </form>

      <ModalOrderConfirmation
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        nodeId="checkout"
      />
    </div>
  );
});

export default FormCheckout;
