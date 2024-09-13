/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useState } from "react";
import Typography from "../Typography";
import styles from "./counter.styles.module.css";
import clsx from "clsx";

const Counter = forwardRef(function Counter(props, ref) {
  const { onIncrease, onDecrease, className, ...rest } = props;

  const [counter, setCounter] = useState(1);

  useImperativeHandle(ref, () => ({
    counter: counter,
  }));

  const handleSubstract = (decrement = 1) => {
    if (counter > 1) {
      setCounter(counter - decrement);
    }
    onDecrease && onDecrease();
  };

  const handleAdd = (increment = 1) => {
    setCounter(counter + increment);
    onIncrease && onIncrease();
  };

  return (
    <div className={clsx(styles.container, className)} {...rest}>
      <button className={styles.button} onClick={() => handleSubstract()}>
        -
      </button>
      <Typography className={styles.text}>{counter}</Typography>
      <button className={styles.button} onClick={() => handleAdd()}>
        +
      </button>
    </div>
  );
});

export default Counter;
