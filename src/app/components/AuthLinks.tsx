"use client";
import React, { useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const {status} = useSession();
  const [open, setOpen] = useState(false);
  const OpenStatus = ({names}:{names?:boolean}) => (
    <>
      {status === "unauthenticated" ? (
        <Link className={names ? styles.link:""} href={"/login"}>Login</Link>
      ) : (
        <>
          <Link  className={names ? styles.link:""} href={"/write"}>Write</Link>
          <span className={ styles.link} onClick={() =>signOut()}>Logout</span>
        </>
      )}
    </>
  );
  return (
    <>
    <OpenStatus names={true}/>
      <div className={styles.burger} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          <OpenStatus/>
        </div>
      )}
    </>
  );
};
export default AuthLinks;
