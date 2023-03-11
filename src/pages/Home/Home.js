import React from "react";
import CourseInfo from "../../components/CourseInfo/CourseInfo";
import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { IdleTimerContainer } from "../../components/IdleTimerContainer/IdleTimer";
import Info from "../../components/Info/Info";
import Learn from "../../components/Learn/Learn";
import Result from "../../components/Result/Result";
import Students from "../../components/Students/Students";
import Tarif from "../../components/Tarif/Tarif";
import WhoDevelopers from "../../components/WhoDevelopers/WhoDevelopers";
import Hero from "../../components/CourseAbout/CourseAbout";

export const Home = () => {
  return <>
  
  <Header />
      <Hero />
      <WhoDevelopers />
      <CourseInfo />
      <Courses />
      <Learn />
      <Result />
      <Students />
      <Tarif />
      <Info />
      <Footer />
      <IdleTimerContainer></IdleTimerContainer>
      </>;
};
