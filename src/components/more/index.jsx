import React from "react";
import CommonHeader from "../common/common-header";
import MoreAllInfo from "./more-allinfo";
import MoreTitle from "./morre-title";
import CommonCards from "../common/common-cards";
import CardImg from "../../assets/common/card-car.png";

function MoreComponent() {
  // Get Data
  const Data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <CommonHeader />
      <MoreAllInfo />
      <MoreTitle />
      <CommonCards
        Data={Data}
        card_img={CardImg}
        card_title={"Car"}
        common_span_title={"Evergreen Trucking LLC "}
        common_title={" specializes in shipping.."}
        btn_title={"All services"}
      />
    </>
  );
}

export default MoreComponent;
