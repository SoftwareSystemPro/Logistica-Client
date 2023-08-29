import React from "react";
import styles from "./style.module.css";
import { Col, Row } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FormGet } from "../../../../redux/form";

function FormInfo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FormGet());
    window.localStorage.getItem("ForVeh");
  }, []);

  const Data = useSelector((state) => state.form.FormGet.data);

  return (
    <>
      {Data?.map((elem) =>
        elem.id == window.localStorage.getItem("ForVeh") ? (
          <>
            <div className={styles.common_left_box}>
              <h2 className={styles.common_info_head_text}>
                Estimation details
              </h2>
              <div className={styles.form_info}>
                <div className={styles.head}>
                  <h2 className={styles.head_text}>Shipping information</h2>
                </div>
                <div className={styles.form_information}>
                  <Row style={{ margin: 0 }}>
                    <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                      <div className={styles.form_info_card}>
                        <ion-icon name="location-outline"></ion-icon>
                        <div>
                          <p>From</p>
                          <h3>{elem.transport_from}</h3>
                        </div>
                      </div>
                    </Col>
                    <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                      <div className={styles.form_info_card}>
                        <ion-icon name="location-outline"></ion-icon>
                        <div>
                          <p>To</p>
                          <h3>{elem.transport_to}</h3>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className={styles.form_info}>
                <div className={styles.head}>
                  <h2 className={styles.head_text}>Vehicle Information</h2>
                </div>
                {elem?.vehicle?.map((elelm) => (
                  <div className={styles.form_information}>
                    <Row style={{ margin: 0 }}>
                      <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                        <div className={styles.form_info_card}>
                          <ion-icon name="car-outline"></ion-icon>
                          <div>
                            <p>Year</p>
                            <h3>{elelm.year}</h3>
                          </div>
                        </div>
                      </Col>
                      <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                        <div className={styles.form_info_card}>
                          <ion-icon name="car-outline"></ion-icon>
                          <div>
                            <p>Make</p>
                            <h3>{elelm.make}</h3>
                          </div>
                        </div>
                      </Col>
                      <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                        <div className={styles.form_info_card}>
                          <ion-icon name="car-outline"></ion-icon>
                          <div>
                            <p>Model</p>
                            <h3>{elelm.model}</h3>
                          </div>
                        </div>
                      </Col>
                      <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                        <div className={styles.form_info_card}>
                          <ion-icon name="car-outline"></ion-icon>
                          <div>
                            <p>Condition</p>
                            <h3>{elelm.condition}</h3>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
              <div className={styles.form_info}>
                <div className={styles.head}>
                  <h2 className={styles.head_text}>Contact Information</h2>
                </div>
                {elem?.contact?.map((ele) => (
                  <div className={styles.form_information}>
                    <Row style={{ margin: 0 }}>
                      <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                        <div className={styles.form_info_card}>
                          <ion-icon name="calendar-clear-outline"></ion-icon>
                          <div>
                            <p>Pick up date</p>
                            <h3>{ele.pick_up_date}</h3>
                          </div>
                        </div>
                      </Col>
                      <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                        <div className={styles.form_info_card}>
                          <ion-icon name="person-outline"></ion-icon>
                          <div>
                            <p>Full name</p>
                            <h3>{ele.full_name}</h3>
                          </div>
                        </div>
                      </Col>
                      <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                        <div className={styles.form_info_card}>
                          <ion-icon name="call-outline"></ion-icon>
                          <div>
                            <p>Phone number</p>
                            <h3>{ele.phone}</h3>
                          </div>
                        </div>
                      </Col>
                      <Col xxxl={6} xxl={6} xl={6} lg={6} sm={12} md={6}>
                        <div className={styles.form_info_card}>
                          <ion-icon name="mail-outline"></ion-icon>
                          <div>
                            <p>Email</p>
                            <h3>{ele.email}</h3>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null
      )}
    </>
  );
}

export default FormInfo;
