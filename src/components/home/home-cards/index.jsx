import React, { useEffect } from "react";
import CommonCards from "../../common/common-cards";
import CardImg from "../../../assets/common/card-car.png";
import { useDispatch, useSelector } from "react-redux";
import { ServicesGet } from "../../../redux/services";

function HomeCards() {
  // Get Data

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ServicesGet());
  }, []);
  const Data = useSelector((state) => state.services.ServicesGet.data);

  return (
    <>
      <CommonCards
        Data={Data}
        common_span_title={"Evergreen Trucking LLC "}
        common_title={" specializes in shipping.."}
        btn_title={"All services"}
      />
    </>
  );
}

export default HomeCards;
