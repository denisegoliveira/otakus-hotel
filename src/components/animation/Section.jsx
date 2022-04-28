import React from "react";
import styles from "./styles.module.css";
import leave1 from "../../assets/images/leaves1.png";
import leave2 from "../../assets/images/leaves2.png";
import leave3 from "../../assets/images/leaves3.png";
import leave4 from "../../assets/images/leaves4.png";

const Section = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.title}>
          <div>
            <h2>いらっしゃいませ!</h2>
          </div>
          <div className={styles.title2}>
            <h2>UwU Bem Vindo =^-^=</h2>
          </div>
        </div>
        <div className={styles.set}>
          <div>
            <img src={leave1} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave2} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave3} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave4} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave1} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave2} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave3} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave4} alt="folhas-caindo" />
          </div>
        </div>
        <div className={`base-input-class ${styles.set} ${styles.set2}`}>
          <div>
            <img src={leave1} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave2} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave3} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave4} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave1} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave2} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave3} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave4} alt="folhas-caindo" />
          </div>
        </div>
        <div className={`base-input-class ${styles.set} ${styles.set3}`}>
          <div>
            <img src={leave1} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave2} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave3} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave4} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave1} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave2} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave3} alt="folhas-caindo" />
          </div>
          <div>
            <img src={leave4} alt="folhas-caindo" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
