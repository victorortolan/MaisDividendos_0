import React from "react";
import styles from "../../styles/ProjectCard.module.css";

const ProjectCard = () => {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ paddingBottom: "4px" }}>
        <div className={styles.title}>Portfólio</div>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img className={styles.image} src="/images/download.png"></img>
          <a
            className={styles.link}
            href="https://www.google.com"
            target="_blank"
          >
            www.juniorscoderspace.shop
          </a>
        </div>
        <div className={styles.techs}>
          <div className={styles.tech_card}>Javascript</div>
          <div className={styles.tech_card}>NodeJS</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
