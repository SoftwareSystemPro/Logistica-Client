import React from "react";
import { WrapperContainer } from "../../style-app";
import Logo from "../../assets/home/logo.png";
import styles from "./styles.module.css";
import CommonBlog from "../common/common-blog";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      {window.location.pathname == "/blog" ? <></> : <CommonBlog />}
      <div className={styles.section_footer}>
        <WrapperContainer>
          <div className={styles.wrapper_footer}>
            <ul>
              <li>
                <img src={Logo} alt="photo" />
              </li>
              <li>
                <h3>Evergreen Trucking LLC</h3>
              </li>
              <li>
                <a href="#">1-888-230-9116</a>
              </li>
              <li>
                <a href="#">9032 Soquel Drive #200Aptos, CA 95003</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Company</h3>
              </li>
              <li>
                <NavLink to={"/aboutus"}>About company</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contacts</NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Services</h3>
              </li>
              <li>
                <a href="#">Service name goes here</a>
              </li>
              <li>
                <a href="#">Service name goes here</a>
              </li>
              <li>
                <a href="#">Service name goes here</a>
              </li>
              <li>
                <a href="#">See all services</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>About</h3>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default Footer;
