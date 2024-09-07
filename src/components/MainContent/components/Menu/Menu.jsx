import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { menuConfig } from "../../../../config/menu";
import { UserInfo } from "../UserInfo/UserInfo";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      {menuConfig.map((item) => (
        <Link to={item.url} key={item.url} className={styles.link}>
          {item.label}
        </Link>
      ))}
      <UserInfo />
    </nav>
  );
};
