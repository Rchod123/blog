import Image from "next/image";
import styles from "./Navbar.module.css";
import React from 'react';
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";


const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
                <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
                <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
            </div>
            <div className={styles.logo}>Article Blog</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link className={styles.link} href={"/"}>Home</Link>
                <Link className={styles.link} href={"/contact"}>Contact</Link>
                <Link className={styles.link} href={"/about"}>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
};

export default Navbar;