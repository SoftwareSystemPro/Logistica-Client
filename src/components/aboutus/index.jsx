import React from "react";
import CommonHeader from "../common/common-header";
import AboutUsTitle from "./aboutus-title";
import AboutUsServices from "./aboutus-services";
import CommonTestimonial from "../common/common-testimonial";
import AboutUsClients from "./aboutus-clients";
import CommonCards from "../common/common-cards";
import CardImg from "../../assets/common/card-car.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ServicesGet } from "../../redux/services";

function AboutUsComponent() {
  // Get Data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ServicesGet());
  }, []);
  const Data = useSelector((state) => state.services.ServicesGet.data);

  return (
    <>
      <CommonHeader />
      <AboutUsTitle />
      <AboutUsServices />
      <CommonTestimonial
        common_testimonial_subtext={"Lorem ipsum dolor sit amet"}
      />
      <AboutUsClients />
      <CommonCards
        Data={Data}
        common_span_title={"Evergreen Trucking LLC "}
        common_title={" specializes in shipping.."}
        btn_title={"All services"}
      />
    </>
  );
}

export default AboutUsComponent;
