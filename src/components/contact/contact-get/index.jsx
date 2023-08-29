import React from "react";
import { WrapperContainer } from "../../../style-app";
import { Col, Row } from "react-grid-system";
import styles from "./styles.module.css";

function ContactGet() {
  return (
    <>
      <WrapperContainer>
        <div className={styles.wrapper_contact_get}>
          <div>
            <h2>Get in touch</h2>
            <p className={styles.contact_subtext}>
              Let us know how we can help
            </p>
          </div>
          <div className={styles.contact_row}>
            <Row style={{ margin: 0 }}>
              <Col
                className={styles.contact_col}
                xxxl={4}
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                sm={6}
              >
                <div className={styles.contact_card}>
                  <div>
                    <ion-icon name="mail-outline"></ion-icon>
                    <h3>support@gulaly.com</h3>
                  </div>
                  <p>Mail</p>
                </div>
              </Col>
              <Col
                className={styles.contact_col}
                xxxl={4}
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                sm={6}
              >
                <div className={styles.contact_card}>
                  <div>
                    <ion-icon name="call-outline"></ion-icon>
                    <h3>+61 234–567 8910</h3>
                  </div>
                  <p>phone number</p>
                </div>
              </Col>
              <Col
                className={styles.contact_col}
                xxxl={4}
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                sm={6}
              >
                <div className={styles.contact_card}>
                  <div>
                    <ion-icon name="location-outline"></ion-icon>
                    <h3>6391 Elgin St. Celina, Delaware 10299</h3>
                  </div>
                  <p>Location</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default ContactGet;
