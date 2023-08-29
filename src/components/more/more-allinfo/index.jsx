import React from "react";
import { WrapperContainer } from "../../../style-app";
import MoreRequest from "./more-request";
import styles from "./style.module.css";
import MoreTable from "./more-table";

function MoreAllInfo() {
  // Get Data
  const Data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <WrapperContainer>
        <div className={styles.wrapper_more_allinfo}>
          <div className={styles.all_information_box}>
            <div className={styles.start_info_box}>
              <h2>Advice and Tips on Freight Shipping Heavy Haulers</h2>
              <p>
                Depending on your destination, there are several ways to ensure
                a safe delivery for shipping heavy machinery. Not all heavy haul
                trucking companies have the same options, but you can have your
                shipment shipped by aircraft, heavy-lift ships, flatbed trucks
                or trailers , or containers. Many heavy equipment hauling
                shipping companies will provide you with options. It’s great to
                have variety when it comes to heavy machinery delivery hauling.
                Depending on what is being shipped, your cargo may need special
                care and hauling equipment, so don’t hesitate to ask heavy haul
                trucking companies if they offer any special services.
              </p>
              <div className={styles.footer_start_info}>
                <h3>Advice and Tips on Freight Shipping Heavy Haulers</h3>
                <p>
                  On the day of your heavy equipment movers are due to arrive,
                  make sure everything is clutter-free for the loaders. They’ll
                  need room for their tools so they can load and tow safely.
                  Providing the equipment movers with this security and
                  clearance is worth spending time on. Once they leave the
                  property, your shipment is protected by insurance held by the
                  freight shipping hauling company as it makes its way to its
                  destination. During the trip, it may be transferred to another
                  heavy equipment mover. However, you will be provided with this
                  information from your logistics agent when you call in to
                  schedule services and learn about the logistics of the
                  haulers.
                </p>
              </div>
            </div>
            <div className={styles.more_after_start_box}>
              <h2>Advice and Tips on Freight Shipping Heavy Haulers</h2>
              <p>
                Depending on your destination, there are several ways to ensure
                a safe delivery for shipping heavy machinery. Not all heavy haul
                trucking companies have the same options, but you can have your
                shipment shipped by aircraft, heavy-lift ships, flatbed trucks
                or trailers , or containers. Many heavy equipment hauling
                shipping companies will provide you with options. It’s great to
                have variety when it comes to heavy machinery delivery hauling.
                Depending on what is being shipped, your cargo may need special
                care and hauling equipment, so don’t hesitate to ask heavy haul
                trucking companies if they offer any special services.
              </p>
            </div>
          </div>
          <div className={styles.more_request_box}>
            <MoreRequest />
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default MoreAllInfo;
