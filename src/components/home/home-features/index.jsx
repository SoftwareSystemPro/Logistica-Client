import React from "react";
import { WrapperContainer } from "../../../style-app";
import FeatureImg1 from "../../../assets/home/featureImg1.png";
import FeatureImg2 from "../../../assets/home/featureImg2.png";
import FeatureImg3 from "../../../assets/home/featureImg3.png";
import styles from "./style.module.css";

function HomeFeatures() {
  return (
    <>
      <WrapperContainer>
        <div className={styles.wrapper_home_features}>
          <div className={styles.features_left_box}>
            <h2>Features section</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
              Etiam sodales ac felis id interdum.
            </p>
            <a href="#">
              <span>Learn more</span>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </div>
          <div className={styles.features_right_box}>
            <ul>
              <li>
                <img src={FeatureImg1} alt="photo" />
                <p>
                  <span>Authority.</span> We’ve seen it all over the years. It’s
                  our authority that allows us to know what works and how to get
                  you moving so you can meet your deadlines.
                </p>
              </li>
              <li>
                <img src={FeatureImg2} alt="photo" />
                <p>
                  <span>Expertise.</span> The shipping process is complicated
                  and often bureaucratic. With 30 years of expertise, we can
                  help you navigate even the trickiest of situations.
                </p>
              </li>
              <li>
                <img src={FeatureImg3} alt="photo" />
                <p>
                  <span>Transparency.</span> We pride ourselves on being
                  transparent in an industry that is ripe with shady companies.
                  Our customers are always kept in the loop and our quotes are
                  competitive.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default HomeFeatures;
