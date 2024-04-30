import React from "react";
import styles from "../../styles/ExperienceCard.module.css";

const ExperienceCard = () => {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div className={styles.year}>2004 - Presente</div>
      <div className={styles.label}>Instituto Federal de São Paulo</div>
      <p className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className={styles.techs}>
        <div className={styles.tech_card}>Javascript</div>
        <div className={styles.tech_card}>NodeJS</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
