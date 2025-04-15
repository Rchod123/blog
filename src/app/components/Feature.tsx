import Image from "next/image";
import styles from "./Feature.module.css";
import React from 'react';


const Feature = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Guest!</b> Discover my stories and creative ideas
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="fill" width={450} height={450} className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipiscing elit.</h1>
                    <p className={styles.postDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies rutrum placerat. Sed pharetra enim sit amet turpis auctor mollis. Integer rhoncus felis vitae sem laoreet hendrerit. Phasellus venenatis justo vestibulum odio laoreet, vitae placerat metus fringilla. Integer aliquam volutpat tellus non dapibus. Proin sed ante purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris feugiat dolor porttitor dictum dapibus. Praesent ut pellentesque eros. Fusce aliquet accumsan tincidunt. Curabitur vitae leo vel mauris consequat porttitor. Morbi sagittis sem purus, a fringilla odio ullamcorper id.</p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    )
};

export default Feature;