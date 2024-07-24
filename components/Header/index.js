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
      <h1 className={styles.title}>Vítor Alves</h1>
      <h2 className={styles.subtitle}>Desenvolvedor</h2>
      <p className={styles.header_p}>
        Estudando Ciência da Computação, Tecnologia e Desenvolvimento.
      </p>
      <ul
        style={{
          "margin-top": "16px",
          display: "flex",
          "flex-direction": "row",
        }}
      >
        <ActiveLink href="https://github.com/alvescode">GitHub</ActiveLink>
        <ActiveLink href="https://www.linkedin.com/in/alvescode/">
          LinkedIn
        </ActiveLink>
        <ActiveLink href="/projetos">Envie-me Uma Mensagem Aqui!</ActiveLink>
      </ul>
    </header>
  );
};

export default Header;
