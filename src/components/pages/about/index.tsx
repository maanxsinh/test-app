import React from "react";
import styles from "./index.module.css";
import { getImageUrl } from "../../../utils/getImageUrl";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/avatar.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites. I am always looking to learn new
                technologies. I am currently looking for a full-time position as
                a software developer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
