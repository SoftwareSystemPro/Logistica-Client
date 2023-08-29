import React, { useEffect, useState } from "react";
import { HeaderAdverstment } from "./styles-index";
import { WrapperContainer } from "../../../style-app";

function HeaderFixed() {
  // scroll functions

  const [head, setHead] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    Change();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const scrollTop = window.scrollY;

  const Change = () => {
    if (scrollTop >= 750) {
      setHead(true);
      // setDrops(true);
    } else {
      setHead(false);
      // setDrops(false);
    }
  };

  return (
    <>
      <HeaderAdverstment head={head === false}>
        <WrapperContainer>
          <div className="header_addverstment">
            <div className="header_persentage">
              <h3>
                <span>20%</span> OFF
              </h3>
              <p>Car shipping</p>
            </div>
            <div className="header_buttons">
              <a className="header_shipping_btn" href="#">
                Get Shipping Estimate - Free
              </a>
              <a className="header_callus_btn" href="#">
                Call us
              </a>
            </div>
          </div>
        </WrapperContainer>
      </HeaderAdverstment>
    </>
  );
}

export default HeaderFixed;
