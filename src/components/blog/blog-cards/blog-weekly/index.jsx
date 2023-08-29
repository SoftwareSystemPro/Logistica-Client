import React from "react";
import { Col, Row } from "react-grid-system";
import CommonCardNews from "../../../common/common-card-news";
import BlogCardImg from "../../../../assets/common/blog-card.png";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BlogGet } from "../../../../redux/blog";

function BlogWeekly() {
  // Get Data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BlogGet());
  }, []);

  const Data = useSelector((state) => state.blog.BlogGet.data);
  return (
    <>
      <div className={styles.wrapper_weekly}>
        <p className={styles.weekly_subtext}>На этой неделе</p>
        <div className="weekly_cards">
          <Row style={{ margin: 0 }}>
            {Data.map((elem) => (
              <Col
                xxxl={4}
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                sm={6}
                className={styles.weekly_col}
              >
                <CommonCardNews
                  card_img={BlogCardImg}
                  card_date={elem.date}
                  card_time={"9min read"}
                  card_description={elem.description}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogWeekly;
