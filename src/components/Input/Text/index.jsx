import { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./input.text.module.css";
import clsx from "clsx";
import Typography from "../../Typography";

const InputText = forwardRef(function InputText(props, ref) {
  const { label, id, error, ...rest } = props;

  const isValid = !error;

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.labelContainer, !isValid && styles.errorText)}
      >
        <Typography as="label" htmlFor={id} className={styles.label}>
          {label}
        </Typography>
        {!isValid && <p>{error}</p>}
      </div>
      <input
        ref={ref}
        id={id}
        {...rest}
        className={clsx(styles.input, !isValid && styles.error)}
      />
    </div>
  );
});

export default InputText;

InputText.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
};
