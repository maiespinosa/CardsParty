import React from "react";
import style from "./footer.module.css";
import Link from "next/link";

const Footer = (props) => {
  return (
    <footer className={style.footerStyle}>
      <div className={style.imgOne}>
        <img src="logoCreate.png" />
      </div>
      <div className={style.imgTwo}>
        <img src="logoFooter.png" />
      </div>
      <div className={style.socialMedia}>
        <img src="facebook.png" />
        <img src="instagram.png" />
        <img src="twitter.png" />
      </div>
    </footer>
  );
};

export default Footer;
