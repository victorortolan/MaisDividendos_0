import React from "react";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const ActiveLink = ({ children, href }) => {
    const style = {
      color: router.pathname == href ? "#6ead3a" : "white",
    };
    return (
      <Link href={href} style={style}>
        {children}
      </Link>
    );
  };

  return (
    <header className={styles.header}>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/projetos">Projetos</ActiveLink>
      <ActiveLink href="/sobre">Sobre esse Projeto</ActiveLink>
      <ActiveLink href="/eu">Sobre Mim</ActiveLink>
    </header>
  );
};

export default Header;
