import { http, HttpResponse } from "msw";
import products from "../data/products";

export const backend_url = "http://my-backend.api.com";

export const endpoints = {
  products: {
    getAll: `${backend_url}/products`,
    getByCategory: (categoryName, isDefinition = false) =>
      isDefinition
        ? `${backend_url}/:categoryName/products`
        : `${backend_url}/${categoryName}/products`,
    getById: (id, isDefinition = false) =>
      isDefinition
        ? `${backend_url}/products/:id`
        : `${backend_url}/products/${id}`,
  },
};

export const handlers = [
  http.get(endpoints.products.getAll, () => {
    // cuerpo de lógica del backend
    // validaciones de datos
    // validación de permisos
    // acceso a los datos de la base de datos
    // estructuración de la respuesta

    // envío de la respuesta
    return HttpResponse.json({ products: products });
  }),
  http.get(endpoints.products.getByCategory(undefined, true), ({ params }) => {
    const { categoryName } = params;
    const categoryProducts = products.filter(
      (product) => product.category === categoryName,
    );

    return HttpResponse.json({ products: categoryProducts });
  }),
  http.get(endpoints.products.getById(undefined, true), ({ params }) => {
    const { id } = params;
    const product = products.find((item) => item.id == id);

    return HttpResponse.json(product);
  }),
];
