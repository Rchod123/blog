import React from "react";
import styles from "./page.module.css";
import Menu from "../components/Menu";
import Image from "next/image";
import Comment from "../components/Comment";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem text is genertor but not genertion
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{"Rajesh"}</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ultricies rutrum placerat. Sed pharetra enim sit amet
              turpis auctor mollis. Integer rhoncus felis vitae sem laoreet
              hendrerit. Phasellus venenatis justo vestibulum odio laoreet,
              vitae placerat metus fringilla. Integer aliquam volutpat tellus
              non dapibus. Proin sed ante purus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Mauris feugiat dolor porttitor
              dictum dapibus. Praesent ut pellentesque eros. Fusce aliquet
              accumsan tincidunt. Curabitur vitae leo vel mauris consequat
              porttitor. Morbi sagittis sem purus, a fringilla odio ullamcorper
              id.
            </p>
            <h2> Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ultricies rutrum placerat. Sed pharetra enim sit amet
              turpis auctor mollis. Integer rhoncus felis vitae sem laoreet
              hendrerit. Phasellus venenatis justo vestibulum odio laoreet,
              vitae placerat metus fringilla. Integer aliquam volutpat tellus
              non dapibus. Proin sed ante purus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Mauris feugiat dolor porttitor
              dictum dapibus. Praesent ut pellentesque eros. Fusce aliquet
              accumsan tincidunt. Curabitur vitae leo vel mauris consequat
              porttitor. Morbi sagittis sem purus, a fringilla odio ullamcorper
              id.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ultricies rutrum placerat. Sed pharetra enim sit amet
              turpis auctor mollis. Integer rhoncus felis vitae sem laoreet
              hendrerit. Phasellus venenatis justo vestibulum odio laoreet,
              vitae placerat metus fringilla. Integer aliquam volutpat tellus
              non dapibus. Proin sed ante purus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Mauris feugiat dolor porttitor
              dictum dapibus. Praesent ut pellentesque eros. Fusce aliquet
              accumsan tincidunt. Curabitur vitae leo vel mauris consequat
              porttitor. Morbi sagittis sem purus, a fringilla odio ullamcorper
              id.
            </p>
          </div>
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
