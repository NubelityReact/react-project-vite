import clsx from "clsx";
import TextMenu from "../../Containers/TextMenu";
import Icon from "../../Icon";
import Logo from "../../Logo";
import styles from "./footer.styles.module.css";
import Typography from "../../Typography";

const Footer = () => {
  const icons = ["facebook.svg", "twitter.svg", "instagram.svg"];
  return (
    <footer className={styles.container}>
      <Logo className={styles.logo} />

      <TextMenu className={styles.navigationText} />

      <Typography className={clsx(styles.text, styles.p1)}>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </Typography>

      <Typography className={clsx(styles.text, styles.p2)}>
        Copyright 2021. All Rights Reserved
      </Typography>

      <div className={styles.icons}>
        {icons.map((icon) => {
          return <Icon key={icon} name={icon} className={styles.icon} />;
        })}
      </div>
    </footer>
  );
};

export default Footer;
