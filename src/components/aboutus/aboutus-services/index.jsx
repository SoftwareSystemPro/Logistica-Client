import React from "react";
import { WrapperContainer } from "../../../style-app";
import Icon1 from "../../../assets/aboutus/check.png";
import Icon2 from "../../../assets/aboutus/bag.png";
import Icon3 from "../../../assets/aboutus/safe.png";
import styles from "./style.module.css";
import AboutusPercentages from "./aboutus-services-persentages";

function AboutUsServices() {
  return (
    <>
      <WrapperContainer>
        <div className={styles.wrapper_aboutus_services}>
          <ul className={styles.aboutus_services}>
            <li>
              <img src={Icon1} alt="photo" />
              <p>
                <span>Authority. </span> We’ve seen it all over the years. It’s
                our authority that allows us to know what works and how to get
                you moving so you can meet your deadlines.
              </p>
            </li>
            <li>
              <img src={Icon2} alt="photo" />
              <p>
                <span>Expertise. </span> The shipping process is complicated and
                often bureaucratic. With 30 years of expertise, we can help you
                navigate even the trickiest of situations.
              </p>
            </li>
            <li>
              <img src={Icon3} alt="photo" />
              <p>
                <span>Transparency. </span> We pride ourselves on being
                transparent in an industry that is ripe with shady companies.
                Our customers are always kept in the loop and our quotes are
                competitive.
              </p>
            </li>
          </ul>
          <AboutusPercentages />
        </div>
      </WrapperContainer>
    </>
  );
}

export default AboutUsServices;
