import styled from "styled-components";
import BackImg from "../../../assets/home/footer-img.png";

export const HeaderAdverstment = styled.div`
  position: fixed !important;
  margin: 0 auto !important;
  width: 100%;
  z-index: 1000;
  transition: all 0.65s;
  top: ${(props) => (props.head ? "100%" : "86%")} !important;
  overflow: hidden;
  @media screen and (max-width: 990px) {
    top: ${(props) => (props.head ? "100%" : "90%")} !important;
  }
  @media screen and (max-width: 430px) {
    top: ${(props) => (props.head ? "100%" : "90.5%")} !important;
  }

  .header_addverstment {
    border-start-end-radius: 18px;
    border-start-start-radius: 18px;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${BackImg}), lightgray no-repeat;
    background-position: top, left !important;
    padding: 0px 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1400px) {
      border-radius: 0px;
    }
    @media screen and (max-width: 990px) {
      padding: 10px 0px !important;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0c1019;
    }
  }

  .header_addverstment .header_persentage {
    display: flex;
    align-items: center;
    gap: 16px;
    @media screen and (max-width: 990px) {
      display: none;
    }
  }

  .header_persentage h3 span {
    color: #d4ff27;
    font-family: "Druk Wide Cy Web Bold Regular";
  }

  .header_persentage h3 {
    color: white;
    leading-trim: both;
    text-edge: cap;
    font-family: "Druk Wide Cy Web Bold Regular";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
  }

  .header_persentage p {
    color: #fff;
    leading-trim: both;
    text-edge: cap;
    font-size: 16.194px;
    font-style: normal;
    font-weight: 700;
    line-height: 131%;
  }

  .header_addverstment .header_buttons {
    display: flex;
    align-items: center;
    align-items: flex-end;
    gap: 6px;
  }

  .header_buttons .header_shipping_btn {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    padding: 12px 24px 14px 24px;
    border-radius: 100px;
    background: #1466d0;
    @media screen and (max-width: 430px) {
      font-size: 13px;
    }
  }

  .header_buttons .header_callus_btn {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    padding: 12px 24px 14px 24px;
    border-radius: 100px;
    background: #d4ff27;
    @media screen and (max-width: 430px) {
      font-size: 13px;
    }
  }

  /* media */

  @media screen and (max-width: 480px) {
    .header_addverstment {
      padding: 10px 36px;
      background-position: center !important;
    }
  }
`;
