import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import styles from "./style.module.css";
import "./style.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

function HomeHero() {
  // Get Datas
  const Data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="home_hero_splide_head">
        <Splide
          hasTrack={false}
          options={{
            pagination: false,
          }}
        >
          <SplideTrack>
            {Data.map(() => (
              <SplideSlide className="splide_slick">
                <div className={styles.home_hero_container}>
                  <h2>Title Copy Goes Here Be Awesome</h2>
                  <button>
                    <span>Learn more</span>{" "}
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </button>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <i class="bx bxs-left-arrow"></i>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <i class="bx bxs-right-arrow"></i>
            </button>
          </div>
        </Splide>
      </div>
    </>
  );
}

export default HomeHero;
