import React, { useRef, useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/site-logo.svg";
import heroRight from "../../assets/images/hero__arrow.svg";
import CloseModal from "../../assets/images/close.svg";
import { IdleTimerContainer } from "../IdleTimerContainer/IdleTimer";
import { Modal } from "../Modal/Modal";
import axios from "axios";





const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [success, setsuccessModal] = useState(false);
const nameRef  = useRef()
const phoneNumRef  = useRef()
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(phoneNumRef);

    axios.post( 'http://167.71.9.83:8080/v1/applications',
   {
        "fullName": `${nameRef.current.value}`,
        "phoneNumber": `${phoneNumRef.current.value}`
      }
  ).then(data => {
    console.log(data.status);
    // if (data.status === 201) {
      setsuccessModal(true)
    // }
  })
  }
  return (
    <div className="bg">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="header__logo">
              <img src={Logo} alt="logo" />
            </a>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  kurs haqida
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  IT-mutaxassis kim?
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  tariflar
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <h1 className="hero__title">Atigi 4 oyda SIZ</h1>
            <p className="hero__desc">
              <span className="hero__desc-bold">Foundation </span> kursiga
              qatnashib Mentor O'qituvchi ko'magida NOLdan dasturlash asoslarini
              o'rganing va IT mutaxassislik darajasiga ko'tariling
            </p>
            <div className="hero__badge">
              <p className="hero__badge-desc">
                Uydan chiqmasdan turib
                <span className="hero__badge-bold"> ONLINE</span> o’rganing
              </p>
            </div>
            <div className="hero__btns">
              <button
              onClick={toggleModal}
                type="button"
                className={`hero__btn`}
              >
                kursga yozilish
              </button>
              {showModal && (
               <Modal>
                    <div className="modal-box">
                      <div className="modal">
                            <div className="modal-top">
                              <button className="modal-top-btn" onClick={() => setShowModal(false)}>
                                <img src={CloseModal} alt="Downloading . . ." />
                              </button>
                            </div>
                        {success ? <div>
                          <div>
                            <h3 className="success-title">TABRIKLAYMIZ</h3>
                            <p className="success-text">SIZ FORMANI MUVAFFAQIYATLI <br /> TO’LDIRDINGIZ</p>
                          </div>
                        </div> :
                          <>
                            <h3 className="modal-mid">Kursga yozilish</h3>
                            <h3 className="modal-title">Foundation</h3>
                            <p className="modal-desc">DASTURLASH KURSI</p>
                            <form className="modal-form" onSubmit={(evt) => handleSubmit(evt)}>
                              <input
                                ref={nameRef}
                                type="text"
                                placeholder="Ism Familiya"
                                className="modal-int"
                              />
                              <input
                                ref={phoneNumRef}
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
                          </> 
                        }
                      </div>
                    </div>
                </Modal>
       
               )}
              <div className="hero__btns-group heroRightImg">
                <a className="hero__btns-about" href="#tarif">
                  batafsil
                </a>
                <img src={heroRight} alt="..........................." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
