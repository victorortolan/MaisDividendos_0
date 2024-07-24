import React from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const ActiveLink = ({ children, href }) => {
    // const style = {
    //   color: router.pathname == href ? "#6ead3a" : "white",
    // };
    return (
      <div className={styles.link}>
        <Link href={href} className={styles.a_link} target="_blank">
          {children}
        </Link>
      </div>
    );
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Finance Control</h1>
      <h2 className={styles.subtitle}>Controle suas finanças online.</h2>
      <ul
        style={{
          "margin-top": "16px",
          display: "flex",
          "flex-direction": "row",
        }}
      >
        <ActiveLink href="/login">Login</ActiveLink>
        <ActiveLink href="/cadastro">Cadastro</ActiveLink>
        <ActiveLink href="/sobre">Sobre</ActiveLink>
      </ul>
    </header>
  );
};

export default Header;
