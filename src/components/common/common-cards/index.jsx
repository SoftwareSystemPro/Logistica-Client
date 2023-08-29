import React from "react";
import styles from "./style.module.css";
import { WrapperContainer } from "../../../style-app";
import { Col, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";

function CommonCards({
  card_img,
  card_title,
  Data,
  btn_title,
  common_title,
  common_span_title,
}) {
  const navigate = useNavigate();
  return (
    <>
      <WrapperContainer>
        <div className={styles.cards_wrapper}>
          <h2>
            {common_span_title ? (
              <>
                <span>{common_span_title}</span>
              </>
            ) : null}
            {common_title}
          </h2>
          <div className={styles.cards_row}>
            <Row style={{ margin: 0 }}>
              {Data.map((elem) => (
                <Col xxxl={4} xxl={4} xl={4} lg={4} md={6} sm={6}>
                  <div className={styles.common_card}>
                    <div className={styles.common_card_tags}>
                      <p className={styles.common_popularity_subtext}>
                        <i class="bx bxs-star"></i>
                        <span>Most popular</span>
                      </p>
                      <p className={styles.common_inter_subtext}>
                        <i class="bx bx-globe"></i>
                        <span>Internationally</span>
                      </p>
                    </div>
                    <img
                      style={{ width: "100%", aspectRatio: "16 / 9" }}
                      src={elem.image}
                      alt="photo"
                    />
                    <h3>{elem.name}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          {btn_title ? (
            <>
              <button onClick={() => navigate("/services")}>{btn_title}</button>
            </>
          ) : null}
        </div>
      </WrapperContainer>
    </>
  );
}

export default CommonCards;
