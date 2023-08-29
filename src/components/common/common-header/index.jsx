import React, { useEffect, useRef, useState } from "react";
import { WrapperContainer } from "../../../style-app";
import styles from "./style.module.css";
import CommonForm from "./common-form";
import FormInfo from "./common-form-info";
import AddressAutocomplete from "./google-autocomplete";
import { useDispatch } from "react-redux";
import { FormAdd, FormGet } from "../../../redux/form";
import { VehicleAdd } from "../../../redux/vehicle";
import { ContactAdd } from "../../../redux/contact";

function CommonHeader() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FormGet());
  }, []);
  // form states and refs
  const [mainController, setMainController] = useState(0);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [year, setYear] = useState();
  const [make, setMake] = useState(0);
  const [model, setModel] = useState(0);
  const [condition, setCondition] = useState(0);

  const [date, setDate] = useState();
  const [fullname, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [formInfo, setFormInfo] = useState(false);
  const [disbled, setDisbled] = useState(false);
  const [disbledSecond, setDisbledSecond] = useState(false);

  // form functions

  const HandelToSecondLevel = async (e) => {
    e.preventDefault();

    if (disbled == false) {
      const body = {
        transport_from: from,
        transport_to: to,
      };

      await dispatch(FormAdd(body));
    } else {
      //
    }
    setMainController(1);
    setFormInfo(false);
    setDisbled(true);
    await setYear("");
  };

  const HandelBackFromSecondLevel = () => {
    setMainController(0);
    setFormInfo(false);
  };

  const HandelVehicle = async (e) => {
    e.preventDefault();

    if (disbledSecond == false) {
      const body = {
        year: year,
        make: make,
        model: model,
        condition: condition,
        form: window.localStorage.getItem("ForVeh"),
      };
      await dispatch(VehicleAdd(body));
    } else {
      //
    }
    setDisbledSecond(true);
  };

  console.log(window.localStorage.getItem("ForVeh"));

  const HandelToThirdLevel = () => {
    setMainController(2);
    setFormInfo(false);
  };

  const HandelBackFromThirdLevel = () => {
    setMainController(1);
    setFormInfo(false);
  };

  const HandelAddNew = async () => {
    await setYear("");
    setDisbledSecond(false);
  };

  const HandelContact = async (e) => {
    e.preventDefault();
    const body = {
      pick_up_date: date,
      full_name: fullname,
      phone: phone,
      email: email,
      form: window.localStorage.getItem("ForVeh"),
    };
    await dispatch(ContactAdd(body));

    await dispatch(FormGet());

    await setFormInfo(true);
  };

  console.log(date, fullname, phone, email);
  return (
    <>
      <div className={styles.section_common_header}>
        {/* <AddressAutocomplete/> */}
        <WrapperContainer>
          <div className={styles.common_wrapper}>
            {formInfo ? (
              <>
                <FormInfo />
              </>
            ) : (
              <>
                {/* <Ass /> */}
                <div className={styles.common_left_box}>
                  <div className={styles.common_texts}>
                    <div className={styles.common_star}>
                      <i class="bx bxs-star"></i>
                      <p>Get Shipping Estimate for Free</p>
                    </div>
                    <h2>How much does shipping your Vehicle cost?</h2>
                    <p className={styles.common_left_box_subtext}>
                      Free Instant Online Calculator based on quotes from
                      Trusted Auto Shipping Companies
                    </p>
                  </div>
                  <div className={styles.common_numbers}>
                    <ul>
                      <li>
                        <h3>190+</h3>
                        <p>Countries served</p>
                      </li>
                      <li>
                        <h3>97%</h3>
                        <p>of customers recommend us</p>
                      </li>
                      <li>
                        <h3>2M+</h3>
                        <p>Delivered services</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            <CommonForm
              controller={mainController}
              setfrom={setFrom}
              setto={setTo}
              from={from}
              to={to}
              year={setYear}
              yearValue={year}
              make={setMake}
              model={setModel}
              condition={setCondition}
              date={date}
              fullname={fullname}
              phone={phone}
              email={email}
              setdate={setDate}
              setFullName={setFullName}
              setPhone={setPhone}
              setEmail={setEmail}
              HandelToSecondLevel={HandelToSecondLevel}
              HandelBackFromSecondLevel={HandelBackFromSecondLevel}
              HandelToThirdLevel={HandelToThirdLevel}
              HandelBackFromThirdLevel={HandelBackFromThirdLevel}
              disbled={disbled}
              disbledSecond={disbledSecond}
              HandelAddNew={HandelAddNew}
              HandelVehicle={HandelVehicle}
              HandelContact={HandelContact}
              formInfo={formInfo}
            />
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default CommonHeader;
