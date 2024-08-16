import { data } from "./data";
import styles from "./text-menu.styles.module.css";
import Typography from "../../Typography";

const TextMenu = (props) => {
  return (
    <nav {...props}>
      <ul className={styles.list}>
        {data.map((item) => {
          return (
            <li key={item.label} className={styles.listItem}>
              <Typography variant="subtitle" style={{ letterSpacing: "2px" }}>
                {item.label}
              </Typography>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TextMenu;
