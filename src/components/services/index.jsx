import React from "react";
import CommonHeader from "../common/common-header";
import CommonCards from "../common/common-cards";
import CardImg from "../../assets/common/card-car.png";
import { useDispatch, useSelector } from "react-redux";
import { ServicesGet } from "../../redux/services";
import { useEffect } from "react";

function ServicesComponent() {
  //Get Datas
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ServicesGet());
  }, []);
  const Data = useSelector((state) => state.services.ServicesGet.data);
  return (
    <>
      <CommonHeader />
      <CommonCards Data={Data} common_title={"I want to transport..."} />
      <CommonCards Data={Data} common_title={"VIP Services"} />
      <CommonCards Data={Data} common_title={"Other Services"} />
    </>
  );
}

export default ServicesComponent;
