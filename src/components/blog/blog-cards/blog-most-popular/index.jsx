import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import BlogCardImg from "../../../../assets/common/blog-card.png";
import styles from "./style.module.css";
import "./style.css";
import CommonCardNews from "../../../common/common-card-news";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BlogGet } from "../../../../redux/blog";

function BlogMostPopular() {
  //Get Datas
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BlogGet());
  }, []);

  const Data = useSelector((state) => state.blog.BlogGet.data);
  return (
    <>
      <div className="blog_splide">
        <div className={styles.blog_splide_box}>
          <p className={styles.blog_splide_subtext}>Самые популярные статьи</p>
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
            {Data.map((elem) => (
              <SplideSlide>
                <CommonCardNews
                  card_img={BlogCardImg}
                  card_date={elem.date}
                  card_time={"9min read"}
                  card_description={elem.description}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}

export default BlogMostPopular;
