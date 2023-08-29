import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import styles from "./style.module.css";
import "./style.css";

function TestimonialSplide() {
  // Get Datas
  const Data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div className="common_testimonial_slide">
        <Splide
          aria-label="My Favorite Images"
          options={{
            pagination: false,
            arrows: false,
            perPage: 3,
            gap: 30,
            breakpoints: {
              825: {
                perPage: 2,
              },
              555: {
                perPage: 1,
              },
            },
          }}
        >
          {Data.map(() => (
            <SplideSlide>
              <div className={styles.common_testimonial_slide_card}>
                <div>
                  {" "}
                  <div className={styles.card_stars_box}>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur maximus quam malesuada est pellentesque rhoncus.
                  </p>
                </div>
                <div className={styles.common_testimonial_user_box}>
                  <img
                    src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                    alt="photo"
                  />
                  <div className={styles.common_testimonial_user_info}>
                    <h3>Customer Name</h3>
                    <p>Company</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default TestimonialSplide;
