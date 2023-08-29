import React from "react";
import styles from "./style.module.css";

function CommonCardNews({ card_date, card_img, card_time, card_description }) {
  return (
    <>
      <div className={styles.common_blog_slide_card}>
        <div className={styles.common_blog_card_img_box}>
          <img
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "10px",
            }}
            src={card_img}
            alt="photo"
          />
          <p>{card_date}</p>
        </div>
        <div className={styles.common_blog_card_description}>
          <p className={styles.description_date}>
            <ion-icon name="stopwatch-outline"></ion-icon>
            <span>{card_time}</span>
          </p>
          <p className={styles.common_blog_card_subtext}>{card_description}</p>
        </div>
      </div>
    </>
  );
}

export default CommonCardNews;
