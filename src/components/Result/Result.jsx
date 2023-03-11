import React, { useState } from "react";
import "./Result.scss";
import Tedbook from "../../assets/images/result.jpg";
import StudentICON from "../../assets/images/student-avatar.svg";
import TeacherICON from "../../assets/images/teacher.svg";
import VoiseMessage from "../../assets/images/voice-message.svg";
import Play from "../../assets/images/play.png";
import Pause from "../../assets/images/pause.png";
import heroRight from "../../assets/images/about-arrow.svg";
import CloseModal from "../../assets/images/close.svg";

const Result = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const playBtn = () => {
    setIsPlay(!isPlay);
  };

  const pauseBtn = () => {
    setIsPause(!isPause);
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section className="result">
        <div className="container">
          <div className="result-wrapper">
            <h2 className="result-title">
              Har bir topshiriq shaxsan <br />
              <span className="res-tit">kurator tomonidan tekshiriladi</span>
            </h2>
            <div className="result-box">
              <img className="result-Student" src={StudentICON} alt="" />
              <div className="result-main">
                <h3 className="result-box-title">Sardor Rakhimov</h3>
                <p className="result-box-text">
                  Assalomu Alaykum, Ustoz! <br /> 👋 Ustoz va nihoyat bitirdim{" "}
                  <br />
                  <span className="result-box-desc">Ko’rib berasizmi? 🙏</span>
                  <img src={Tedbook} alt="" />
                </p>
              </div>
            </div>
            <div className="result-box-2">
              <div className="result-box-main">
                <h3 className="result-box-title">Kurator Abdulaziz</h3>
                <p className="result-box-text">
                  Zo’r{")"} shu tariqa davom eting 👍
                </p>
                <div className="voise-message-box">
                  <div className="voise-mess-con">
                    <button
                      type="button"
                      onClick={playBtn}
                      className="btn-voise"
                    >
                      {isPlay ? (
                        <img src={Pause} alt="downloading . . ." />
                      ) : (
                        <img src={Play} alt="downloading . . ." />
                      )}
                    </button>
                  </div>
                  <div className="btn-strategy-box">
                    <img
                      className="voise-message"
                      src={VoiseMessage}
                      alt="downloading . . ."
                    />
                    <div className="btn-strategy">
                      <span className="btn-span">1:20</span>
                      <span className="btn-span">15:35</span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="result-Teacher"
                src={TeacherICON}
                alt="downloading . . . "
              />
            </div>
            <div className="result-box-3">
              <img className="result-Student" src={StudentICON} alt="" />
              <div className="result-box-main-3 widthr">
                <h3 className="result-box-title">Sardor Rakhimov</h3>
                <div className="voise-message-box">
                  <div className="voise-mess-con">
                    <button
                      type="button"
                      onClick={pauseBtn}
                      className="btn-voise"
                    >
                      {isPause ? (
                        <img src={Pause} alt="downloading . . ." />
                      ) : (
                        <img src={Play} alt="downloading . . ." />
                      )}
                    </button>
                  </div>
                  <div className="btn-strategy-box">
                    <img
                      className="voise-message"
                      src={VoiseMessage}
                      alt="downloading . . ."
                    />
                    <div className="btn-strategy">
                      <span className="btn-span">1:20</span>
                      <span className="btn-span">15:35</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="whodevelopers-btn">
              <a href="#footer">xoziroq kursga yozilaman</a>
              <img src={heroRight} alt=". . . . " />
        
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Result;
