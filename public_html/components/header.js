import React from "react";
import style from "./header.module.css";
import Link from "next/link";

const Navigation = (props) => {
  return (
    <div>
      <header className={style.headerHome}>
        <div className={style.containerHome}>
          <div>
            <img src="/fondoHeader.png" />
          </div>
          <div className={style.info}>
            <h1>
              Descarga <br />
              Cards Party
            </h1>
            <h2>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </h2>
            <div className={style.imgDownload}>
              <img src="apple.png" />
              <img src="gplay.png" />
            </div>
          </div>
        </div>
      </header>
      <div className={style.diagonal}>
        <div className={style.containerDiagonal}>
          <div className={style.txt}>
            <h1>
              Juega online con <br />
              tus amigos
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tempus eros sit amet lacus blandit congue. Fusce eu lacus quis
              magna vehicula rutrum ut vitae nisi. Nulla auctor ac sapien id
              eleifend.
            </p>
            <p>
              Suspendisse vel consequat ex. Proin varius facilisis dui vitae
              gravida. Proin tempus dui sagittis purus tristique.
            </p>
          </div>
          <div className={style.iphoneImg}>
            <img src="iphone.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
