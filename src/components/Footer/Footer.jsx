import React,{useRef} from "react";
import "./Footer.scss";
import ftLogo from "../../assets/images/footer-logo.svg";
import youtube from "../../assets/images/youtube.svg";
import telegram from "../../assets/images/telegram.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import apis from "../../assets/images/apislogos.png";
import axios from "axios";


const Footer = () => {
  const nameRef  = useRef();
  const phoneNumRef  = useRef();
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
  })
  }
  return (
    <footer className="ft-main">
      <div className="container">
        <div className="ft-wrap">
          <form className="ft-form"  action="" method="post" autoComplete="off" onSubmit={(evt) => handleSubmit(evt)}>
            <p className="ft-text">
              Formani to’ldiring, muxaxassislardan BEPUL konsultatsiya oling va
              Chegirmaga ega bo’ling
            </p>
            <input
              ref={nameRef}
              className="ft-first-in"
              type="text"
              placeholder="Ismingizni kiriting"
              aria-label="username"
            />
            <input
              ref={phoneNumRef}
              className="ft-second-in"
              type="tel"
              placeholder="Telefon raqam"
              aria-label="user phone number"
            />
            <button className="ft-btn" type="submit">
              Konsultatsiya olish
            </button>
          </form>
          <div className="ft-new-wrap">
            <div className="ft-new-wrap-top">
              <a className="ft-logo" href="/">
                <img src={ftLogo} alt="" />
              </a>
              <span className="ft-info-text">
                Copyright Ⓒ 2022 Matrix IT Academy All rights reserved
              </span>
            </div>
            <div className="ft-new-wrap-bottom">
              <address className="ft-adres">
                Toshkent shahar / 100084 Qoratosh, A.Xojayev 2 ko’chasi
              </address>
              <div className="ft-social-wrap">
                <a href="/">
                    <img src={youtube} alt="" />
                </a>
                <a href="https://t.me/matrixitacademy">
                    <img src={telegram} alt="" />
                </a>
                <a href="/">
                    <img src={facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/matrixitacademy/">
                    <img src={instagram} alt="" />
                </a>
              </div>
              <a href="https://apisllc.group/">
               <img className="apis-logo" src={apis} alt="apis-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
