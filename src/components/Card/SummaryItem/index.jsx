import styles from "./summary.item.styles.module.css";
import Typography from "../../Typography";
import { formatMoney } from "../../../utils/formatMoney";

const SummaryItem = (props) => {
  const { children, ...rest } = props;
  return (
    <div className={styles.container}>
      <picture className={styles.imgContainer}>
        <img src={rest.categoryImage.mobile} alt="" className={styles.img} />
      </picture>

      <div className={styles.data}>
        <Typography style={{ fontWeight: "bold" }}>
          {rest.name.split(" ").slice(0, -1).toString()}
        </Typography>
        <Typography className={styles.price}>
          {formatMoney(rest.price)}
        </Typography>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default SummaryItem;
