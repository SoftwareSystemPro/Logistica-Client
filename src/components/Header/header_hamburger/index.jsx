import { Drawer, Space } from "antd";
import React from "react";
import styles from "./styles.module.css";
import "./style.css";
import { NavLink } from "react-router-dom";

function HeaderHamburger({ state, onClose }) {
  return (
    <>
      <Drawer
        title="Company name"
        placement="left"
        onClose={onClose}
        open={state}
        width="100%"
        extra={
          <Space>
            <button className="drawers_close_btn" onClick={onClose}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </Space>
        }
      >
        <div className={styles.header_hamburger_wrapper}>
          <ul>
            <li onClick={onClose}>
              <NavLink to={"/aboutus"}>About us</NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li onClick={onClose}>
              <NavLink to={"/contact"}>Contacts</NavLink>
            </li>
            <li>
              <button className={styles.header_call_btn}>Call us</button>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
}

export default HeaderHamburger;
