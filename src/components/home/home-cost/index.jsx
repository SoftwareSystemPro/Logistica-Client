import React from "react";
import { WrapperContainer } from "../../../style-app";
import styles from "./style.module.css";

function HomeCost() {
  return (
    <>
      <div className={styles.section_home_cost}>
        <WrapperContainer>
          <div className={styles.wrapper_home_cost}>
            <h2>
              How much does <span>shipping your Vehicle cost</span>?
            </h2>
            <div className={styles.home_cost_right_box}>
              <h3>
                Free Instant Online Calculator based on quotes from Trusted Auto
                Shipping Companies
              </h3>
              <a href="#">Get Shipping Estimate for Free</a>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default HomeCost;
