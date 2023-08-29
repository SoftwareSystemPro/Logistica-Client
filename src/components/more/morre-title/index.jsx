import React from "react";
import { WrapperContainer } from "../../../style-app";
import TitleImg from "../../../assets/more/moreImg.png";
import styles from "./style.module.css";

function MoreTitle() {
  return (
    <>
      <div className={styles.section_more_title}>
        <WrapperContainer>
          <div className={styles.wrapper_more_title}>
            <img src={TitleImg} alt="photo" />
            <div className={styles.more_title_texts}>
              <h2>Title Copy Goes Here Be Awesome</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <a href="#">
                <span>Learn more</span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </a>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default MoreTitle;
