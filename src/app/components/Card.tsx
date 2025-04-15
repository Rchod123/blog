import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
   <div className={styles.container}>
    <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
    </div>
    <div className={styles.textContainer}>
        <div className={styles.details}>
            <span className={styles.date}>11.02.2025</span>
            <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
        <h1 className="">this is the headoing of the posts</h1>
        <p>this is the content of the post it can be so much of length, it can be shorted also it depends on the content of the post it can be bog of small but it delivers the required content in the page</p>
        </Link>
        <Link href={"/"}>Read More</Link>
    </div>
   </div>
  );
};

export default Card;