import CardList from "../components/CardList";
import Menu from "../components/Menu";
import styles from "./page.module.css";


const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
       <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;