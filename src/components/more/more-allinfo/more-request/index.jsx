import React from "react";
import styles from "./style.module.css";

function MoreRequest() {
  return (
    <>
      <div className={styles.more_request}>
        <h3>Calculate My Shipping</h3>
        <form>
          <div>
            <input
              type="text"
              placeholder="&#xf041; Transport FROM (Zip code, City or State)"
            />
            <input
              type="text"
              placeholder="&#xf041; Transport TO (Zip code, City or State)"
            />
          </div>
          <button>
            <span>Get Shipping Estimate - Free</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </form>
      </div>
    </>
  );
}

export default MoreRequest;
