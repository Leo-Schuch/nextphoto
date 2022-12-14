import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className={css.container}>
      {/*  lado esquerdo*/}
      <div className={css.h_sides}>
        <span className={css.text1}>Protetor solar</span>
        <div className={css.text2}>
          <span>Moda coleção</span>
          <span> 
            {" "}
            Proteção para todas as idades.
          </span>
        </div>
      </div>

      {/* Meio hero imagem */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Melhores ofertas</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* lado direito */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Tráfego Mensal</span>
        </div>

        <div className={css.customers}>
          <span>100k</span>
          <span>Clientes Satisfeitos</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
