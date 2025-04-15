import CardList from "./components/CardList";
import CategoryList from "./components/CategoryList";
import Feature from "./components/Feature";
import Menu from "./components/Menu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Feature />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
