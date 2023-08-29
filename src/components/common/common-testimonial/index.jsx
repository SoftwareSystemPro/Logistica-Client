import React from "react";
import { WrapperContainer } from "../../../style-app";
import styles from "./style.module.css";
import TestimonialSplide from "./testimonial-splide";

function CommonTestimonial({ common_testimonial_subtext }) {
  return (
    <>
      <div className={styles.section_common_testimonial}>
        <WrapperContainer>
          <div className={styles.wrapper_common_testimonial}>
            <div>
              {" "}
              {common_testimonial_subtext ? (
                <>
                  <p className={styles.common_testimonial_subtext}>
                    {common_testimonial_subtext}
                  </p>
                </>
              ) : null}
              <h2>Testimonial Section</h2>
            </div>
            <TestimonialSplide />
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default CommonTestimonial;
