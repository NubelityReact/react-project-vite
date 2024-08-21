import { data } from "./data";
import styles from "./text-menu.styles.module.css";
import Typography from "../../Typography";
import { Link } from "react-router-dom";

const TextMenu = (props) => {
  return (
    <nav {...props}>
      <ul className={styles.list}>
        {data.map((item) => {
          return (
            <li key={item.label} className={styles.listItem}>
              <Link to={item.href}>
                <Typography variant="subtitle" className={styles.itemText}>
                  {item.label}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TextMenu;
