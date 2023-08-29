import React from "react";
import { WrapperContainer } from "../../../style-app";
import TitleImg from "../../../assets/home/titleImg.png";
import styles from "./style.module.css";

function HomeTitle() {
  return (
    <>
      <WrapperContainer>
        <div className={styles.wrapper_home_title}>
          <img src={TitleImg} alt="photo" />
          <div className={styles.home_title_texts}>
            <h2>Title Copy Goes Here Be Awesome</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <a href="#">
              <span>Learn more</span>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default HomeTitle;
