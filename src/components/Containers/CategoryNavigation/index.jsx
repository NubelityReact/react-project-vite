import CardCategoryNavigationItem from "../../Card/CategoryNavigationItem";
import { links } from "./links-data";
import styles from "./category-navigation.styles.module.css";

export default function CategoryNavigation() {
  return (
    <nav className={styles.container}>
      {links.map((data) => {
        return <CardCategoryNavigationItem key={data.title} {...data} />;
      })}
    </nav>
  );
}
