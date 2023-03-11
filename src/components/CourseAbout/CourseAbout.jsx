import React from "react";
import "./CourseAbout.scss";
import heroRight from "../../assets/images/about-arrow.svg";

const Hero = () => {
  return (
    <>
      <section className="course-about">
        <div className="container">
          <div className="course-about-wrapper">
            <h2 className="course-about-title">Kurs haqida</h2>
            <h3>*muvaffaqiyat siri birinchi qadamni qo'yishdir</h3>
            <p className="course-about-text course-about-text-one">
              <strong>Foundation </strong> Dasturlash kursida asosiy dasturlash
              tillarini yani C++ va Python <br /> hamda ular orqali
              dasturlashning mantiq-mohiyati o’rgatiladi.
            </p>
            <p className="course-about-text course-about-text-two">
              Atigi 4 oyda SIZ dasturlashning fundamental bilimlar, dasturchiga
              kerak bo’ladigan <br /> barcha instrumentlar va ma’lumotlar bazasi
              bilan tez ishlash jarayonilarini o’rganasiz.
            </p>
            <p className="course-about-text course-about-text-three">
              Foundation Dasturlashning asoslari kursi - mutaxasislikka
              tayyorlov kursi bo’lib, <br /> IT mutaxassislikka ilk qadam
              hisoblanadi.
            </p>
            <div className="whodevelopers-btn">
              <a href="#">ilk qadam qo’yish</a>
              <img src={heroRight} alt=". . . . " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
