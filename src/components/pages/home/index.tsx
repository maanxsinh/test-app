import React from "react";

import styles from "./index.module.css";
import { getImageUrl } from "../../../utils/getImageUrl";

export const Home = () => {
  console.log(">>>image url:", getImageUrl("about/avatar.png"));
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sinh</h1>
        <p className={styles.description}>
          I'm a front-end developer with using React. I enjoy building sites and
          apps.
        </p>
        <a href="mailto:sinhman0801@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        className={styles.avatarImg}
        src="src/assets/about/avatar.png"
        alt="avatar"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
