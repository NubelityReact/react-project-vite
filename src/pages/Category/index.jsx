import { useParams } from "react-router-dom";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import products from "../../data/products";
import CardProduct from "../../components/Card/Product";
import styles from "./category.page.styles.module.css";
import Typography from "../../components/Typography";

const CategoryPage = () => {
  // obtener los parámetros de la url
  const params = useParams();
  const name = params.name;

  // pide los datos al backend a partir de tus datos en la url
  const categoryProducts = products.filter(
    (product) => product.category === name,
  );

  //renderiza los datos
  return (
    <main>
      <Typography as="h1" variant="h4" className={styles.title}>
        {name}
      </Typography>
      <div className={styles.content}>
        {categoryProducts.map((product) => {
          return (
            <CardProduct
              key={product.id}
              name={product.name}
              image={product.image.mobile}
              description={product.description}
              isNew={product.new}
              url={`/product-details/${product.id}`}
            />
          );
        })}

        <CategoryNavigation />
      </div>
    </main>
  );
};

export default CategoryPage;
