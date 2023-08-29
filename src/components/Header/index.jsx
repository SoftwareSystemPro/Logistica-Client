import React, { useState } from "react";
import { WrapperContainer } from "../../style-app";
import Logo from "../../assets/home/logo.png";
import styles from "./style.module.css";
import HeaderHamburger from "./header_hamburger";
import { NavLink } from "react-router-dom";
import HeaderFixed from "./header-fixed";

function Header() {
  // states
  const [open, setOpen] = useState(false);

  //hamburger actions
  const HandelOpen = () => setOpen(true);

  const HandelClose = () => setOpen(false);

  return (
    <>
      <div className={styles.section_header}>
        <WrapperContainer>
          <div className={styles.wrapper_header}>
            <div className={styles.header_navigation_box}>
              <NavLink to={"/"}>
                <img src={Logo} alt="photo" />
              </NavLink>
              <ul>
                <li>
                  <NavLink to={"/aboutus"}>About us</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/blog"}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contacts</NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.header_btn_box}>
              <button className={styles.header_call_btn}>Call us</button>
              <button className={styles.header_icon_btn} onClick={HandelOpen}>
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
          </div>
        </WrapperContainer>
      </div>
      <HeaderHamburger state={open} onClose={HandelClose} />
      <HeaderFixed />
    </>
  );
}

export default Header;
