import React, { useState } from "react";
import styles from "./style.module.css";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SecondLevelImg from "../../../../assets/common-header/second_level.png";
import ThirdLevelImg from "../../../../assets/common-header/third_level.png";
import Line from "../../../../assets/home/line.png";

function CommonForm({
  controller,
  HandelToSecondLevel,
  year,
  from,
  to,
  yearValue,
  HandelBackFromSecondLevel,
  HandelToThirdLevel,
  HandelBackFromThirdLevel,
  disbled,
  setfrom,
  setto,
  make,
  model,
  condition,
  disbledSecond,
  HandelAddNew,
  HandelVehicle,
  setdate,
  setFullName,
  setPhone,
  setEmail,
  date,
  fullname,
  phone,
  email,
  HandelContact,
  formInfo,
}) {
  return (
    <>
      <div className={styles.common_right_box}>
        <h3>
          {controller == 0 ? (
            <>Calculate My Shipping</>
          ) : controller == 1 ? (
            <>Vehicle Information</>
          ) : controller == 2 ? (
            <>Contact Information</>
          ) : null}
        </h3>
        {controller == 0 ? (
          <>
            <form onSubmit={HandelToSecondLevel}>
              <div>
                <div class="login__box">
                  <div class="login__box-input">
                    <input
                      type="text"
                      class="login__input"
                      placeholder=""
                      onChange={(e) => setfrom(e.target.value)}
                      value={from}
                      disabled={disbled}
                    />
                    <label for="" class="login__label">
                      Transport FROM (Zip code, City or State)
                    </label>
                    <label for="" class="login__label__icon">
                      <ion-icon name="location-outline"></ion-icon>
                    </label>
                  </div>
                </div>

                <div class="login__box">
                  <div class="login__box-input">
                    <input
                      type="text"
                      class="login__input"
                      placeholder=""
                      onChange={(e) => setto(e.target.value)}
                      value={to}
                      disabled={disbled}
                    />
                    <label for="" class="login__label">
                      Transport TO (Zip code, City or State)
                    </label>
                    <label for="" class="login__label__icon">
                      <ion-icon name="location-outline"></ion-icon>
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className={styles.form_mext_btn}>
                <span>Get Shipping Estimate - Free</span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </form>
          </>
        ) : controller == 1 ? (
          <>
            <img src={SecondLevelImg} alt="photo" />
            <form onSubmit={HandelVehicle}>
              <div>
                <div class="login__box">
                  <div class="login__box-input">
                    <input
                      type="text"
                      class="login__input__year"
                      placeholder=""
                      value={yearValue}
                      onChange={(e) => year(e.target.value)}
                      disabled={disbledSecond}
                    />
                    <label for="" class="login__label__year">
                      Vehicle Year
                    </label>
                  </div>
                </div>
                <div className={styles.form_selects}>
                  <select
                    onChange={(e) => make(e.target.value)}
                    disabled={disbledSecond}
                  >
                    <option value="Vehicle Make">Vehicle Make</option>
                    <option value="Vehicle Make">Vehicle Make</option>
                  </select>
                </div>
                <div className={styles.form_selects}>
                  <select
                    onChange={(e) => model(e.target.value)}
                    disabled={disbledSecond}
                  >
                    <option value="Vehicle Make">Vehicle Model</option>
                    <option value="Vehicle Make">Vehicle Model</option>
                  </select>
                </div>
                <div className={styles.form_selects}>
                  <select
                    onChange={(e) => condition(e.target.value)}
                    disabled={disbledSecond}
                  >
                    <option value="Vehicle Make">Vehicle Сondition</option>
                    <option value="Vehicle Make">Vehicle Сondition</option>
                  </select>
                </div>
                {disbledSecond ? (
                  <>
                    <div className={styles.add_new_box}>
                      <h3>Add new vehicle</h3>
                      <img src={Line} alt="photo" />
                      <button onClick={HandelAddNew}>
                        <ion-icon name="add-outline"></ion-icon>
                      </button>
                    </div>
                  </>
                ) : null}
              </div>

              <div className={styles.form_buttons}>
                <button
                  onClick={HandelBackFromSecondLevel}
                  className={styles.form_back_btn}
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                {disbledSecond ? (
                  <>
                    <button
                      className={styles.form_mext_btn}
                      onClick={HandelToThirdLevel}
                    >
                      <span>Next</span>
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>
                  </>
                ) : (
                  <button className={styles.form_mext_btn} type="submit">
                    <span>Get Shipping Estimate - Free</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </button>
                )}
              </div>
            </form>
          </>
        ) : controller == 2 ? (
          <>
            <img src={ThirdLevelImg} alt="photo" />
            <form onSubmit={HandelContact}>
              <div>
                <div class="login__box">
                  <div class="login__box-input">
                    <input
                      type="date"
                      class="login__input"
                      value={date}
                      onChange={(e) => setdate(e.target.value)}
                      defaultValue=""
                      disabled={formInfo}
                    />
                    <label for="" class="login__label">
                      Pick up date
                    </label>
                    <label for="" class="login__label__icon__date">
                      <ion-icon name="calendar-clear-outline"></ion-icon>
                    </label>
                  </div>
                </div>

                <div class="login__box">
                  <div class="login__box-input">
                    <input
                      type="text"
                      class="login__input__year"
                      placeholder=""
                      onChange={(e) => setFullName(e.target.value)}
                      defaultValue=""
                      value={fullname}
                      disabled={formInfo}
                    />
                    <label for="" class="login__label__year">
                      Full name
                    </label>
                  </div>
                </div>

                <div className="phone_input">
                  <PhoneInput
                    class="login__input"
                    inputClass="login__input"
                    disableSearchIcon={true}
                    country={"us"}
                    onChange={(e) => setPhone(e)}
                    disabled={formInfo}
                  />
                </div>
                <div class="login__box">
                  <div class="login__box-input">
                    <input
                      type="text"
                      class="login__input__year"
                      placeholder=""
                      defaultValue=""
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      disabled={formInfo}
                    />
                    <label for="" class="login__label__year">
                      Email
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.form_buttons}>
                <button
                  onClick={HandelToSecondLevel}
                  className={styles.form_back_btn}
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                {formInfo ? (
                  <>
                    <button className={styles.form_mext_btn}>
                      <ion-icon name="checkmark-outline"></ion-icon>
                    </button>
                  </>
                ) : (
                  <button className={styles.form_mext_btn} type="submit">
                    <span>Get Shipping Estimate - Free</span>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </button>
                )}
              </div>
            </form>
          </>
        ) : null}
      </div>
    </>
  );
}

export default CommonForm;
