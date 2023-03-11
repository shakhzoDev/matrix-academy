import React from "react";
import "./Courses.scss";
import heroRight from "../../assets/images/hero__arrow.svg";
import Check from "../../assets/images/check.svg";

const Courses = () => {
  return (
    <>
      <section className="courses">
        <div className="container">
          <div className="courses-wrapper">
            <h2 className="courses-title">4 oylik kursda sizni kutiladi</h2>
            <span className="courses-desc">
              *bugungi kundagi mutaxassis bir paytlar boshlang'ich edi
            </span>
            <ul className="courses-list">
              <li className="courses-item">
                <img className="courses-icons" src={Check} alt="" />
                <div className="df">
                  <h3 className="courses-list-text">48 dars</h3>
                </div>
              </li>
              <li className="courses-item">
                <img className="courses-icons" src={Check} alt="" />
                <div className="df">
                  <h3 className="courses-list-text">Atmosfera</h3>
                  <p className="courses-list-title">
                    kurs jarayonlarni katta komanda bilan o’rganasiz
                  </p>
                </div>
              </li>
              <li className="courses-item">
                <img className="courses-icons" src={Check} alt="" />
                <div className="df">
                  <h3 className="courses-list-text">Platforma</h3>
                  <p className="courses-list-title">
                    qulay platformada kurs jarayonlarni olib borasiz
                  </p>
                </div>
              </li>
            </ul>
            <div>
              <div className="lessons__mains">
                <div className="lessons__main-link">
                  <a className="lessons__main-btn" href="#tarif">
                    Kurs afzalliklari
                  </a>
                </div>
                <ul className="lessons__main-list">
                  <li className="lessons__main-item">
                    <strong className="lessons__main-strong">Traning</strong>
                    <p className="lessons__main-text">
                      kurs davomida doimiy <br />
                      qo’shimcha treninglar <br />
                      b’lib o’tadi
                    </p>
                  </li>
                  <li className="lessons__main-item">
                    <strong className="lessons__main-strong">
                      Istiqbolli <br />
                      martaba rivojlanishi
                    </strong>
                    <p className="lessons__main-text">
                      kurs jarayonida bilimlaringiz bilan birgalikda <br />
                      statusga ham ega bo’lasiz
                    </p>
                  </li>
                  <li className="lessons__main-item">
                    <strong className="lessons__main-strong">Konkurslar</strong>
                    <p className="lessons__main-text">
                      kurs jarayonida qimmatbaho <br />
                      sovg’alar o’ynaladi
                    </p>
                  </li>
                </ul>
                <ul className="lessons__main-list">
                  <li className="lessons__main-item-list">
                    <strong className="lessons__main-strong">
                      Malakali O’qituvchilar
                    </strong>
                    <p className="lessons__main-text">
                      kurs jarayonini malakali <br />
                      murabbiylar va kuratorlar <br />
                      olib boradi
                    </p>
                  </li>
                  <li className="lessons__main-item-list">
                    <strong className="lessons__main-strong">
                      {" "}
                      <strong className="lessons__main-strong">
                        Zamonaviy bilimlar
                      </strong>
                      <p className="lessons__main-text">
                        kursda zamonaviy <br />
                        texnologiyalarga asoslangan <br />
                        bilimlar beriladi
                      </p>
                    </strong>
                  </li>
                  <strong className="lessons__main-strong">
                    <li className="lessons__main-item-lisr">
                      <strong className="lessons__main-strong">
                        Amaliy jarayonlar
                      </strong>
                      <p className="lessons__main-text">
                        kursda nafaqat nazariy bilimlar <br />
                        balki amaliy jarayonlar ham <br />
                        mavjuddir
                      </p>
                    </li>
                  </strong>
                </ul>
                <strong className="lessons__main-strong"></strong>
              </div>
              <strong className="lessons__main-strong"></strong>
            </div>

            <div className="whodevelopers-btn">
              <a  href="#">darxol kursga yozilaman</a>
              <img src={heroRight} alt=". . . . " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
