import { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./input.radio.module.css";
import clsx from "clsx";

const InputRadio = forwardRef(function InputRadio(props, ref) {
  const { options, className, ...rest } = props;

  return (
    <div className={clsx(styles.container, className)}>
      {options.map((item) => {
        return (
          <label key={item.id} className={styles.inputContainer}>
            <input
              ref={ref}
              {...rest}
              value={item.id}
              type="radio"
              className={styles.input}
            />
            <p>{item.label}</p>
          </label>
        );
      })}
    </div>
  );
});

export default InputRadio;

InputRadio.propTypes = {
  options: PropTypes.array,
};
