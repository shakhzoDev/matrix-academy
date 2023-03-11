import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import ReactModal from "react-modal";
import "./idletimer.scss";
import CloseModal from "../../assets/images/close.svg";

export const IdleTimerContainer = () => {
  const idleTimerRef = useRef();
  const [modal, setModal] = useState(false);
  const handleSubmit = () => {
    console.log("jbjb");
  }
  return (
    <div>
      <IdleTimer
        timeout={90000}
        onIdle={() => setModal(true)}
        ref={idleTimerRef}
      >
        <ReactModal
          onAfterClose={() => setModal(false)}
        //   bodyOpenClassName="overflow"
          style={{
            content: {
                marginTop:"80px",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "15px",
            },
          }}
          isOpen={modal}
          onRequestClose={() => setModal(false)}
        >
          <div className="modal">
            <div className="modal-top">
              <button className="modal-top-btn" onClick={() => setModal(false)}>
                <img src={CloseModal} alt="Downloading . . ." />
              </button>
            </div>
            <h3 className="modal-mid">Kursga yozilish</h3>
            <h3 className="modal-title">MAXSUS TAKLIF</h3>
            <p className="modal-desc">KURSGA YOZILING VA <span className="modal-green">15% </span>CHEGIRMAGA <br /> EGA BO’LING!</p>
            <form onSubmit={()=>
             handleSubmit()
            } className="modal-form">
              <input
                type="text"
                placeholder="Ism Familiya"
                className="modal-int"
              />
              <input
                type="text"
                placeholder="Telefon raqam"
                className="modal-int"
              />
              <button className="modal-btn">kursga yozilaman</button>
            </form>
            <label htmlFor="mo-id" className="modal-b">
              <input id="mo-id" type="checkbox" />
              <p className="modal-bottom">
                Shaxsiy ma'lumotlarimni qayta ishlashga roziman
              </p>
            </label>
          </div>
        </ReactModal>
      </IdleTimer>
      ;
    </div>
  );
};
