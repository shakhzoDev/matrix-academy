import React from "react";
import "./Learn.scss";
import Result from "../../assets/images/result.jpg";

const Learn = () => {
  return (
    <div>
      <section className="learn">
        <div className="container">
          <div className="learn__wrapper">
            <h2 className="courses__title learn__course">
              Kursda nimani o’rganaman?
            </h2>
            <p className="courses__text learn__course-text">
              *aql va xarakter - bu haqiqiy ta'limning maqsadlari
            </p>
            <p className="learn__text">
              KURS DAVOMIYLIGI: <strong>4 OY</strong> <br />
              KURS BO’LIMLARI: <strong>3 MODULKURS</strong> <br />
              DARSLIKLARI: <strong>48 DARS + 16 ONLINE BONUS DARS</strong>
            </p>
            <div
              className="lessons__main"
              style={{ border: "none", margin: 0 }}
            >
              <ul className="lessons__main-list">
                <li className="lessons__main-item learn__item">
                  <strong className="lessons__main-strong">
                    Kompyuter savothonligi
                  </strong>
                  <p className="lessons__main-text">
                    Kompyuterni tog’ri foydalanishni <br />
                    noldan o’rgatiladi
                  </p>
                </li>
                <li className="lessons__main-item learn__item">
                  <strong className="lessons__main-strong">
                    C Dasturlar asoslari
                  </strong>
                  <p className="lessons__main-text">
                    Dasturlash tillarini otasi va <br />
                    Algoritm o’rganishga qulay til
                  </p>
                </li>
                <li className="lessons__main-item learn__item">
                  <strong className="lessons__main-strong">Python</strong>
                  <p className="lessons__main-text">
                    hozirda eng ommabob va <br />
                    dastur yozishga qulay bo’lgan til
                  </p>
                </li>
              </ul>
              <ul className="lessons__main-list learn__list">
                <li className="lessons__main-item-list learn__item-list">
                  <strong className="lessons__main-strong">
                    Pyton (Django)
                  </strong>
                  <p className="lessons__main-text">
                    Django Pytonning frameworki bo’lib <br />
                    backend yozishga ishlatiladi
                  </p>
                </li>
                <li className="lessons__main-item-list learn__item-list">
                  <strong className="lessons__main-strong">
                    {" "}
                    <strong className="lessons__main-strong">SQL</strong>
                    <p className="lessons__main-text">
                      ma’lumotlarni saqlash <br /> uchun ishlatiladi
                    </p>
                  </strong>
                </li>
                <strong className="lessons__main-strong">
                  <li className="lessons__main-item-lisr learn__items-list">
                    <strong className="lessons__main-strong">GitHub</strong>
                    <p className="lessons__main-text">
                      kodlarni yuklash va versiyalash <br /> uchun
                      ishlatiladigan maxsus servis
                      <br />
                      mavjuddir
                    </p>
                  </li>
                </strong>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
