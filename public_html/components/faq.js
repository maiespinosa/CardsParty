import React from "react";
import style from "./faq.module.css";
import Link from "next/link";

const Fraq = (props) => {
  return (
    <section>
      <div className={style.containerFaq}>
        <div className={style.box}>
          <img src="botsOne.png" />
          <h3>¿Que juegos puedo jugar con mis amigos?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tempus eros sit amet lacus blandit congue.{" "}
          </p>
        </div>
        <div className={style.box}>
          <img src="botsTwo.png" />
          <h3>¿Cuantas personas pueden estar en una partida?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tempus eros sit amet lacus blandit congue.{" "}
          </p>
        </div>
        <div className={style.box}>
          <img src="botsThree.png" />
          <h3>¿Que juegos puedo jugar con mis amigos?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tempus eros sit amet lacus blandit congue.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fraq;
