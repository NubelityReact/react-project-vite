/* eslint-disable react/prop-types */
import styles from "./add.product.to.cart.styles.module.css";
import Typography from "../../Typography";
import Button from "../../Button/Base";
import ProductRecommendation from "../ProductRecomendation";
import Counter from "../../Counter";
import { useCart } from "../../../contexts/cart.context";
import { useRef } from "react";
import ResponsiveImage from "../../ResponsiveImage";
import products from "../../../data/products";
import { formatMoney } from "../../../utils/formatMoney";

const AddProductToCart = (props) => {
  const { addProduct } = useCart();
  const counterRef = useRef(null);

  const handleAddProduct = () => {
    const value = counterRef.current.counter;
    const item = { quantity: value, product: props };
    addProduct(item);
  };

  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <div>
          <ResponsiveImage image={props.image} name={props.name} />
        </div>

        <div className={styles.content}>
          {props.new && (
            <Typography variant="overline" className="orange">
              new product
            </Typography>
          )}

          <Typography variant="h4" as="h1">
            {props.name}
          </Typography>

          <Typography className={styles.opacity}>
            {props.description}
          </Typography>

          <Typography>{formatMoney(props.price)}</Typography>

          <div className={styles.buttons}>
            <Counter ref={counterRef} className={styles.counter} />

            <Button variant="contained" onClick={handleAddProduct}>
              <Typography variant="subtitle">add to cart</Typography>
            </Button>
          </div>
        </div>
      </article>

      <div className={styles.deviceData}>
        <section className={styles.section}>
          <Typography variant="h5">Features</Typography>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {props.features.split("\n").map((item) => (
              <Typography key={item} className={styles.opacity}>
                {item}
              </Typography>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <Typography variant="h5">in the box</Typography>

          <ul className={styles.inTheBoxList}>
            {props.includes.map((item, n) => {
              return (
                <li key={item.item + n}>
                  <Typography as="span" className="orange">
                    {item.quantity}x
                  </Typography>
                  <Typography as="span">{item.item.trim()}</Typography>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <div className={styles.gallery}>
        <picture>
          <img src={props.gallery.first.mobile} alt="" />
        </picture>
        <picture>
          <img src={props.gallery.second.mobile} alt="" />
        </picture>
        <picture>
          <img src={props.gallery.third.mobile} alt="" />
        </picture>
      </div>

      <section className={styles.section} style={{ gap: 56 }}>
        <Typography variant="h5">You may also like</Typography>
        <div className={styles.section}>
          {props.others.map((item) => (
            <ProductRecommendation
              key={item.slug}
              product={item}
              productId={products.find((p) => p.slug == item.slug).id}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default AddProductToCart;
