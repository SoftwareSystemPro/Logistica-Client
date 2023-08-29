import React from "react";
import { WrapperContainer } from "../../../style-app";
import ClientLogo1 from "../../../assets/aboutus/ClientsLogo1.png";
import ClientLogo2 from "../../../assets/aboutus/ClientsLogo2.png";
import ClientLogo3 from "../../../assets/aboutus/ClientsLogo3.png";
import ClientLogo4 from "../../../assets/aboutus/ClientsLogo4.png";
import ClientLogo5 from "../../../assets/aboutus/ClientsLogo5.png";
import ClientLogo6 from "../../../assets/aboutus/ClientsLogo6.png";
import styles from "./style.module.css";

function AboutUsClients() {
  return (
    <>
      <div className={styles.section_aboutus_clients}>
        <WrapperContainer>
          <div className={styles.wrapper_aboutus_clients}>
            <h2>Our clients</h2>
            <ul>
              <li>
                <img src={ClientLogo1} alt="photo" />
              </li>
              <li>
                <img src={ClientLogo2} alt="photo" />
              </li>
              <li>
                <img src={ClientLogo3} alt="photo" />
              </li>
              <li>
                <img src={ClientLogo4} alt="photo" />
              </li>
              <li>
                <img src={ClientLogo5} alt="photo" />
              </li>
              <li>
                <img src={ClientLogo6} alt="photo" />
              </li>
            </ul>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default AboutUsClients;
