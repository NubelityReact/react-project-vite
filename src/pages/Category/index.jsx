import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const params = useParams();
  const name = params.name;

  return (
    <div>
      <h1>Estamos en la página category: {name}</h1>
    </div>
  );
};

export default CategoryPage;
