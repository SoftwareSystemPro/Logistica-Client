import React from "react";
import { WrapperContainer } from "../../../style-app";
import styles from "./style.module.css";
import BlogSplide from "./blog-splide";

function CommonBlog() {
  return (
    <>
      <div className={styles.section_common_blog}>
        <WrapperContainer>
          <div className={styles.wrapper_common_blog}>
            <div className={styles.head_common_blog}>
              <h2>Blog</h2>
              <a href="#">
                <span>Browse content</span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </a>
            </div>
            <BlogSplide />
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default CommonBlog;
