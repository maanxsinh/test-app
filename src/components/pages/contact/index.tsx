import React, { useState } from "react";
import styles from "./index.module.css";
import { getImageUrl } from "../../../utils/getImageUrl";

export const Contact = () => {
  const [fullName, setFullName] = useState<string>("Man Van Sinh");
  const [email, setEmail] = useState<string>("sinhman0801@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState<string>("+843334446");
  const [gender, setGender] = useState<string>("Male");
  const [address, setAddress] = useState<string>("Hai Ba Trung, Ha Noi");

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/avatar.png")}
          alt="avatar"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Basic Information</h3>
              <div className={styles.section}>
                <p>Full Name</p>
                <input
                  className={styles.inputEdit}
                  value={fullName}
                  onChange={handleChangeFullName}
                />
              </div>
              <div className={styles.section}>
                <p>Email</p>
                <input
                  className={styles.inputEdit}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={styles.section}>
                <p>Phone Number</p>
                <input
                  className={styles.inputEdit}
                  value={phoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Additional Information</h3>
              <div className={styles.section}>
                <p>Gender</p>
                <input
                  className={styles.inputEdit}
                  value={gender}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setGender(e.target.value);
                  }}
                />
              </div>
              <div className={styles.section}>
                <p>Address</p>
                <input
                  className={styles.inputEdit}
                  value={address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
