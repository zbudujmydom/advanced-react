import { Outlet } from "react-router-dom";
import styles from "./MainContent.module.css";
import { Menu } from "./components/Menu/Menu";
import { UserContextProvider } from "../../context/UserContext";
import { CounterFunc } from "../Counter/CounterFunc";
import { Counter } from "../Counter/Counter";

export const MainContent = () => {
  return (
    <div>
      <UserContextProvider>
        <h1>Test App</h1>
        <Menu />
        <section className={styles.content}>
          <Outlet />
        </section>
        <footer>stopka</footer>
        <CounterFunc initialValue={5} />
        <Counter initialValue={5} />
      </UserContextProvider>
    </div>
  );
};
