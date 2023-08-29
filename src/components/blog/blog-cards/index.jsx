import React from "react";
import { WrapperContainer } from "../../../style-app";
import BlogMostPopular from "./blog-most-popular";
import styles from "./styles.module.css";
import BlogYesterday from "./blog-yesterday";
import BlogWeekly from "./blog-weekly";

function BlogCards() {
  return (
    <>
      <WrapperContainer>
        <div className={styles.wrapper_blog_cards}>
          <BlogMostPopular />
          <BlogYesterday />
          <BlogWeekly />
        </div>
      </WrapperContainer>
    </>
  );
}

export default BlogCards;
