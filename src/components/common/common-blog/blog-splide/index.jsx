import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import BlogCardImg from "../../../../assets/common/blog-card.png";
import "./style.css";
import CommonCardNews from "../../common-card-news";
import { useDispatch, useSelector } from "react-redux";
import { BlogGet } from "../../../../redux/blog";
import { useEffect } from "react";

function BlogSplide() {
  //Get Datas
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BlogGet());
  }, []);

  const Data = useSelector((state) => state.blog.BlogGet.data);
  return (
    <>
      <div className="common_blog_slide">
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
    </>
  );
}

export default BlogSplide;
