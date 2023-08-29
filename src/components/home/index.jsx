import React from "react";
import HomeHero from "./home-hero";
import CommonHeader from "../common/common-header";
import HomeCards from "./home-cards";
import HomeFeatures from "./home-features";
import HomeTitle from "./home-title";
import HomeTestimonial from "./home-testimonial";
import HomeCost from "./home-cost";
import HomeQuestion from "./home-question";

function HomeComponent() {
  return (
    <>
      <HomeHero />
      <CommonHeader />
      <HomeCards />
      <HomeFeatures />
      <HomeTitle />
      <HomeTestimonial />
      <HomeCost />
      <HomeQuestion />
    </>
  );
}

export default HomeComponent;
