import { useForm } from "react-hook-form";
import InputRadio from "../../../Input/Radio";
import InputText from "../../../Input/Text";

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

const FormCheckout = () => {
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

  const paymentMethod = watch("paymentOptions");

  const onSubmit = (data) => {
    // datos ya lipios y procesados
    // eslint-disable-next-line no-console
    console.log("datos", data);
    // una vez todo es correcto, continua con tu proceso
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Billing details</p>
        <InputText
          id="name"
          label="name"
          error={errors?.name?.message ?? null}
          {...register("name", { required: "Este campo es obligatorio" })}
        />
        <InputText
          id="email"
          label="email"
          error={errors?.email?.message ?? null}
          {...register("email", {
            required: "Este campo es requerido",
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w{1,5}(\.\w+)?[^.\W])$/,
              message: "Debe ser un correo válido",
            },
          })}
        />
        <InputText
          id="phone"
          label="phone"
          error={errors?.phone?.message ?? null}
          {...register("phone", {
            required: "Este campo es requerido",
            pattern: {
              value: /[0-9]{10}/,
              message: "deben ser 10 dígitos",
            },
            maxLength: {
              value: 10,
              message: "No pueden ser mas de 10 dígitos",
            },
          })}
        />

        <p>Shipping info</p>
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

        <p>Payment details</p>
        <InputRadio options={paymentOptions} {...register("paymentOptions")} />
        {paymentMethod === "1" && (
          <>
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
          </>
        )}

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default FormCheckout;
