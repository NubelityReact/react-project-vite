import { useParams } from "react-router-dom";
import CategoryNavigation from "../../components/Containers/CategoryNavigation";
import CardProduct from "../../components/Card/Product";
import styles from "./category.page.styles.module.css";
import Typography from "../../components/Typography";
import { useEffect, useState } from "react";
import { endpoints } from "../../mocks/handlers";

const CategoryPage = () => {
  // obtener los parámetros de la url
  const params = useParams();
  const name = params.name;
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(endpoints.products.getByCategory(name))
      .then((response) => response.json())
      .then((data) => {
        setCategoryProducts(data.products);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) {
    return <h1>loading....</h1>;
  }

  if (error) {
    return <h1>An error occured {error}</h1>;
  }

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
