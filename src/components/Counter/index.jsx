/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useState } from "react";
import Typography from "../Typography";
import styles from "./counter.styles.module.css";
import clsx from "clsx";

const Counter = forwardRef(function Counter(props, ref) {
  const { counter = 1, onIncrease, onDecrease, className, ...rest } = props;

  const [innerCounter, setInnerCounter] = useState(counter);

  useImperativeHandle(ref, () => ({
    counter: innerCounter,
  }));

  const handleSubstract = (decrement = 1) => {
    if (innerCounter > 1) {
      setInnerCounter(innerCounter - decrement);
    }
    onDecrease && onDecrease();
  };

  const handleAdd = (increment = 1) => {
    setInnerCounter(innerCounter + increment);
    onIncrease && onIncrease();
  };

  return (
    <div className={clsx(styles.container, className)} {...rest}>
      <button className={styles.button} onClick={() => handleSubstract()}>
        -
      </button>
      <Typography className={styles.text}>{innerCounter}</Typography>
      <button className={styles.button} onClick={() => handleAdd()}>
        +
      </button>
    </div>
  );
});

export default Counter;
