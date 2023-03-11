import React,{useState,useRef} from "react";
import "./Info.scss";
import close from "../../assets/images/close.svg";
import CloseModal from "../../assets/images/close.svg";
import { Modal } from "../Modal/Modal";
import axios from "axios";

const Info = () => {
  const [showModal, setShowModal] = useState(false);
  const [success, setsuccessModal] = useState(false);
const nameRef  = useRef();
const phoneNumRef  = useRef();
const questionRef = useRef();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(questionRef.current.value);

    axios.post('http://167.71.9.83:8080/v1/questions',
   {
        "fullName": `${nameRef.current.value}`,
        "phoneNumber": `${phoneNumRef.current.value}`,
        "text": `${questionRef.current.value}`
      }
  ).then(data => {
    console.log(data.status);
      setsuccessModal(true)
    
  })
  }
  return (
    <div className="info">
      <div className="container">
        <div className="info-wrap">
        <h2 className="info-title">Ko’p beriladigan savollar</h2>
          <div className="info-text-box">
            <p className="info-text">Savollaringiz qoldimi?</p>
            <button onClick={toggleModal} className="info-btn">Savol bermoq</button>
            {showModal && (
              <Modal>
                <div className="modal-box">
                      <div className="modal">
                            <div className="modal-top">
                              <button className="modal-top-btn" onClick={() => {
                                setShowModal(false)
                                setsuccessModal(false)
                              }}>
                                <img src={CloseModal} alt="Downloading . . ." />
                              </button>
                            </div>
                        {success ? <div>
                          <div>
                            <h3 className="success-title">TABRIKLAYMIZ</h3>
                            <p className="success-text">SIZ SAVOLNI MUVAFFAQIYATLI <br /> YUBORDINGIZ</p>
                          </div>
                        </div> :
                          <>
                            
                            <h3 className="modal-title-savol">SAVOLINGIZNI QOLDIRING</h3>
                            <p className="modal-desc">TEZ ORADA SIZ BILAN BOG’LANIB <br />
KOSULTATSIYA BERILADI!</p>
                            <form className="modal-form" onSubmit={(evt) => handleSubmit(evt)}>
                            <textarea ref={questionRef} className="modal-txarea">
                            </textarea>
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
          </div>
          <ul className="info-list">
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Kurs uchun to’lovni qanday amalga oshiraman ?
                </strong>
              </summary>
                <p className="info-item-text">
                Istalgan to’lov turi orqali to’lovni amalga oshirib kursda
                o’qishingiz mumkin <br /> Hammasi juda oddiy va qulaydir!
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Kursni boshlash uchun qanday ko'nikmalar kerak?
                </strong>
              </summary>
              <p className="info-item-text">
                Biz siz bilan butunlay noldan boshlab ishlaymiz sizda kerakli
                ko’nikmalar <br /> shart emas
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Men oldin IT sohasida bo’lmaganman meni qo’limdan keladimi?
                </strong>
              </summary>
              <p className="info-item-text">
                Hammasi sizga va vaqtingizni qanday tashkil qilishingizga
                bog'liq, <br /> bir necha yuz talaba allaqachon bizda o'qitilgan va
                hamma <br /> narsani qilgan. Siz mashg'ulotlarga 2-3 soat ajratishingiz
                kerak, <br /> dam olish kunlarida dam olishingiz yoki ish kunlarida <br />
                bajarishga vaqtingiz bo'lmagan vazifalarni bajarishingiz mumkin.
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Kursdan keyin pul ishlashni boshlaymanmi?
                </strong>
              </summary>
              <p className="info-item-text">
                Biz sizga boshlang’ich IT-mutaxassislik uchun kerak bo'lgan
                hamma narsani beramiz, <br /> lekin barchasi sizga bog'liq{" "}
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Men kurs yakunida sertifikat olamanmi?
                </strong>
              </summary>
              <p className="info-item-text">
                Kursni tugatib, yakuniy ishni himoya qilganingizdan so'ng siz
                maktabimizdan <br /> Albatta tugatganligingiz haqida Sertifikat olasiz.
              </p>

              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Kuratorlar har bir talabani tekshiradimi?
                </strong>
              </summary>
              <p className="info-item-text">
                Ha, albatta. Bizda bir nechta tajribali o'qituvchilar,
                murabbiylar va kurs <br /> mualliflari bor, ular sizning uy
                vazifangizni tekshirishga vaqt ajratadilar. <br /> Fikr-mulohaza
                o'rganish nuqtai nazaridan bizning kuchli tomonlarimizdan
                biridir.
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Uy vazifasini tekshirish qancha vaqt oladi?
                </strong>
              </summary>
              <p className="info-item-text">
                1-3 ish kuni ichida sizga uy vazifangizning tahlilini olishingiz
                kafolatlanadi.
              </p>
              </details>
            </li>
            <li className="info-item">
              <details>
              <summary className="info-item-wrap">
                <strong className="info-item-title">
                  Siz talabalarga ishga joylashishda yordam berasizmi?
                </strong>
              </summary>
              <p className="info-item-text">
                Kursda biz sizga o’quvchilarni qanday va qayerdan izlash
                kerakligini aytamiz. Biz ko’p hollarda <br /> ish beruvchilardan
                arizalarni qabul qilamiz va bevosita kompaniyaga <br /> ishga
                joylashtiramiz. Shuningdek, biz frilanser loyihalarni taklif
                qilamiz va <br /> Matrix IT Academy o’quv maktabida Stajor sifatida ish
                faoliyat yuritishingiz <br /> mumkin va Sajorlikdan keyin kerakli
                tartiblardan o’sangiz ishga ham qabul qilamiz
              </p>  
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Info;
