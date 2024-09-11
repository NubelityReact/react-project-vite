import CardCategoryNavigationItem from "../../Card/CategoryNavigationItem";
import { links } from "./links-data";
import styles from "./category-navigation.styles.module.css";
import { Link } from "react-router-dom";

export default function CategoryNavigation() {
  return (
    <nav className={styles.container}>
      {links.map((data) => {
        return (
          <Link key={data.title} to={data.href}>
            <CardCategoryNavigationItem {...data} />
          </Link>
        );
      })}
    </nav>
  );
}
