import React from "react";
import heroRight from "../../assets/images/hero__arrow.svg";
import "./WhoDevelopers.scss";

const WhoDevelopers = () => {
  return (
    <>
      <section className="whodevelopers">
        <div className="container">
          <div className="whodevelopers-wrapper">
            <h2 className="whodevelopers-title">IT-mutaxassis kim?</h2>
            <span>*o’zingizni qayta kashf qiling!</span>
            <p className="whodevelopers-text">
              <strong className="who-developers-desc">IT mutaxassisi</strong>{" "}
              dasturiy ta'minotni ishlab chiqish va kompyuter texnologiyalaridan
              foydalanish bilan bog'liq 500 dan ortiq raqamli kasblardan
              biridir. Globallashuv IT-sanoatini eng yuqori maoshli sohalardan
              biriga aylantirdi: kompaniyalar yaxshi mutaxassislar uchun
              xorijliklar bilan raqobatlashishga majbur. Iqtisodiyot va kundalik
              hayot tobora raqamli bo'lib bormoqda, shuning uchun IT sohasiga
              talab tobora ortmoqda. (tekstni qisqartirish kerak)
            </p>
            <h2 className="developer">
              IT mutaxassislikni egallash uchun 3 FAKT
            </h2>
            <ul className="whodeveloper-list">
              <li className="whodevelopers-item">
                <h3 className="whodevelopers-list-title">Talab</h3>
                <p classname="whodevelopers-list-text">
                  2021-yilda IT-bozoridagi bo‘sh ish o‘rinlari soni 72 foizga
                  oshdi. Rezyumelar soni - atigi 6%
                </p>
              </li>
              <li className="whodevelopers-item">
                <h3 className="whodevelopers-list-title">Kelajagi</h3>
                <p className="whodevelopers-list-text">
                  Hozirda har bir soha IT sohasi orqali qurulmoqda va IT kasblar
                  boshqa kasblarga nisbatan talab kun sayin kuchaymoqda
                </p>
              </li>
              <li className="whodevelopers-item">
                <h3 className="whodevelopers-list-title">Yuqori maosh</h3>
                <p className="whodevelopers-list-text">
                  Yangi IT-mutaxassisning maoshi 4 000 000 so'm. Uch yildan
                  keyin esa - 21 000 000 so'mga to’g’ri kelmoqda
                </p>
              </li>
            </ul>
            <div className="whodevelopers-btn">
              <a href="#">IT mutaxassikni egallash</a>
              <img src={heroRight} alt=". . . . " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoDevelopers;
