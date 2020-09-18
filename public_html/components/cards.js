import React from "react";
import style from "./cards.module.css";
import Link from "next/link";
 
const Cards = (props) => {
  return (
    <section>
      <div className={style.coin}>
        <img src="coinOne.png" />
      </div>
      <div className={style.containerCards}>
        <div className={style.cardsBox}>
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
          <div className={style.coinTwo}>
            <img src="coinThree.png" />
          </div>
        </div>
        <div className={style.cardsBoxTwo}>
          <img src="cards.png" />
        </div>
      </div>
    </section>
  );
};

export default Cards;
