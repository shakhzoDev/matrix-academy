import React, { useState,useRef } from "react";
import "./Tarif.scss";
import CloseModal from "../../assets/images/close.svg";
import { Modal } from "../Modal/Modal";
import axios from "axios";

const Tarif = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isGreen, setIsGreen] = useState(false);

  const [isBlack, setIsBlack] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const nameRef  = useRef();
  const phoneNumRef  = useRef();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const [success, setsuccessModal] = useState(false);



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
    <div className="tarif" id="tarif">
      <div className="container">
        <div className="tarif-wrap">
          <div className="tarif-text-box">
            <h2 className="tarif-title">Kursga qanday yozilaman?</h2>
            <span className="tarif-text">
              *bugun g'ayrioddiy narsa qilish uchun yana bir imkoniyat
            </span>
          </div>
          <h3 className="tarif-step">Oddiy 3 qadam</h3>
          <ul className="tarif-list">
            <li className="tarif-item">
              <span className="tarif-num">1</span>
              <p className="tarif-num-text">
                Kurs bo’yicha kerakli tarifni tanlang
              </p>
            </li>
            <li className="tarif-item">
              <span className="tarif-num">2</span>
              <p className="tarif-num-text">Formani to’ldiring</p>
            </li>
            <li className="tarif-item">
              <span className="tarif-num">3</span>
              <p className="tarif-num-text">
                Ertagayoq IT-mutaxassislikka birinchi qadam tashlang
              </p>
            </li>
          </ul>
        </div>
        <div className="tarif-second-wrap">
          <div className="second-text-box">
            <h4 className="second-title">Qulay ta'lim formatini tanlang</h4>
            <p className="second-title-text">
              Maxsus taklif 24 soat amal qiladi!
            </p>
          </div>
          <ul className="tarif-card-list">
            <li className="tarif-card-item">
              <div className="tr-card-wrap">
                <div className="card-text-box">
                  <div className="top-t-box">
                    <strong className="card-tarif-title">Junior</strong>
                    <span className="card-tarif">tarif</span>
                  </div>
                  <div className="bottom-t-box">
                    <h3 className="card-price">990 000</h3>
                    <span className="card-cost">so'm</span>
                  </div>
                  <div className="card-btn-wrap">
                    <p className="card-text">Asl narx 
                   <del>1 200 000 so’m</del></p>
                    <button
                      className="card-open-btn"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
                {isOpen && (
                  <div className="">
                    <div className="open-box">
                      <ul className="card-info-list">
                        <li className="card-info-item">
                          Kurs davomiyligi - 4 oy
                        </li>
                        <li className="card-info-item">3 ta modul asosida</li>
                        <li className="card-info-item">48 ta dars</li>
                        <li className="card-info-item">
                          Uyga vazifalar sistemasi
                        </li>
                        <li className="card-info-item">
                          Kurs yakunida Sertifikat
                        </li>
                        <li className="card-info-item">
                          Treninglarga bilet 20% chegirmada
                        </li>
                        <li className="card-info-item">Umumiy Telegram chat</li>
                        <li className="card-info-item">Kursga kirish: 3 oy</li>
                      </ul>
                    </div>
                    <div className="card-black-box">
                      <p>
                        Joy qoldi: <span>300</span>dan <span>75</span>
                      </p>
                      <button onClick={toggleModal} className="card-info-btn">
                        kursga yozilaman
                      </button>
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
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className="tarif-card-item">
              <div className="tr-card-wrap">
                <div className="card-text-box">
                  <div className="top-t-box">
                    <strong className="card-tarif-title">Middle</strong>
                    <span className="card-tarif">tarif</span>
                  </div>
                  <div className="bottom-t-box">
                    <h3 className="card-price">2 430 000</h3>
                    <span className="card-cost">so'm</span>
                  </div>
                  <div className="card-btn-wrap">
                    <p className="card-text">
                      Asl narx <del>2 700 000 so’m</del>
                    </p>
                    <button
                      className="card-open-btn"
                      onClick={() => setIsGreen(!isGreen)}
                    >
                      Batafsil
                    </button>
                  </div>
                </div>

                {isGreen && (
                  <div className="">
                    <div className="open-box">
                      <ul className="card-info-list">
                        <li className="card-info-item">
                          Kurs davomiyligi - 4 oy
                        </li>
                        <li className="card-info-item">3 ta modul asosida</li>
                        <li className="card-info-item">48 ta dars</li>
                        <li className="card-info-item">
                          Uyga vazifalar sistemasi
                        </li>
                        <li className="card-info-item">
                          Kurs yakunida Sertifikat
                        </li>
                        <li className="card-info-item">
                          Treninglarga bilet 50% chegirmada
                        </li>
                        <li className="card-info-item">Umumiy Telegram chat</li>
                        <li className="card-info-item">Kursga kirish: 6 oy</li>
                        <li className="card-info-item">16 ta ONLINE dars</li>
                        <li className="card-info-item">
                          Kurator biriktiriladi
                        </li>
                        <li className="card-info-item">
                          Kompaniya tomonidan uyushtrilgan konkurslarga
                          qatnashish imkoni
                        </li>
                        <li className="card-info-item">
                          Kurs yakunida O'quvchini yo'naltriladi
                        </li>
                      </ul>
                    </div>
                    <div className="card-black-box">
                      <p>
                        Joy qoldi: <span>200</span>dan <span>35</span>
                      </p>
                      <button onClick={toggleModal} className="card-info-btn">
                        kursga yozilaman
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
                    </div>
                  </div>
                )}
              </div>
              <span className="card-sale">-10%</span>
            </li>
            <li className="tarif-card-item">
              <div className="tr-card-wrap">
                <div className="card-text-box">
                  <div className="top-t-box">
                    <strong className="card-tarif-title">Senior</strong>
                    <span className="card-tarif">tarif</span>
                  </div>
                  <div className="bottom-t-box">
                    <h3 className="card-price">3 825 000</h3>
                    <span className="card-cost">so'm</span>
                  </div>
                  <div className="card-btn-wrap">
                    <p className="card-text">
                      Asl narx <del>4 00 000 so’m</del>
                    </p>
                    <button
                      className="card-open-btn"
                      onClick={() => setIsBlack(!isBlack)}
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
                {isBlack && (
                  <div className="">
                    <div className="open-box">
                      <ul className="card-info-list">
                        <li className="card-info-item">
                          Kurs davomiyligi - 4 oy
                        </li>
                        <li className="card-info-item">3 ta modul asosida</li>
                        <li className="card-info-item">48 ta dars</li>
                        <li className="card-info-item">
                          Uyga vazifalar sistemasi
                        </li>
                        <li className="card-info-item">
                          Kurs yakunida Sertifikat
                        </li>
                        <li className="card-info-item">
                          Treninglarga bilet 20% chegirmada
                        </li>
                        <li className="card-info-item">Umumiy Telegram chat</li>
                        <li className="card-info-item">Kursga kirish: 3 oy</li>
                        <li className="card-info-item">16 ta ONLINE dars</li>
                        <li className="card-info-item">
                          Kurator biriktiriladi
                        </li>
                        <li className="card-info-item">
                          Kompaniya tomonidan uyushtrilgan konkurslarga
                          qatnashish imkoni
                        </li>
                        <li className="card-info-item">
                          Kurs yakunida O'quvchini yo'naltriladi
                        </li>
                        <li className="card-info-item">
                          Qiymati 990 000 so'mlik Ingliz tili 3 Oylik Online
                          kursda o'qish imkoni
                        </li>
                        <li className="card-info-item">
                          Kurs yakunidan so’ng kompaniyada Stajirovka sifatida
                          ishlash
                        </li>
                        <li className="card-info-item">
                          Stajirovkadan so'ng ishga kirish imkoni
                        </li>
                        <li className="card-info-item">
                          Freelancer Sifatida Pul topish uchun kerakli barcha
                          keyslar
                        </li>
                        <li className="card-info-item">
                          Boshqa kurslarga 20%lik chegirmali Vaucher
                        </li>
                      </ul>
                    </div>
                    <div className="card-black-box">
                      <p>
                        Joy qoldi: <span>300</span>dan <span>75</span>
                      </p>
                      <button onClick={toggleModal} className="card-info-btn">
                        kursga yozilaman
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
                    </div>
                  </div>
                )}
              </div>
              <span className="card-sale-green">-15%</span>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Tarif;
