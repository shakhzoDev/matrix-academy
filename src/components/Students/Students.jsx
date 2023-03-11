import React,{useState} from "react";
import "./Students.scss";
import first from "../../assets/images/01.svg";
import second from "../../assets/images/02.svg";
import third from "../../assets/images/03.svg";
import fourth from "../../assets/images/04.svg";
import fifth from "../../assets/images/05.svg";
import sixth from "../../assets/images/06.svg";
import heroRight from "../../assets/images/hero__arrow.svg";
import CloseModal from "../../assets/images/close.svg";

const Students = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="student">
      <div className="container">
        <div className="student-wrapper">
          <div className="student-top-wrap">
            <div className="st-text-box">
              <h2 className="student-title">
                Kursdan keyin nimaga ega bo’laman?
              </h2>
              <p className="student-text">
                *chempionlar mukammallikka erishguncha ishlashda davom etadilar
              </p>
            </div>
            <ul className="st-num-list">
              <div className="disf">
                <li className="st-num-item">
                  <img className="st-num-img" src={first} alt="" />
                  <strong className="st-num-title">Tushuncha</strong>
                  <p className="st-num-text">
                    IT sohasida to’liq tushunchaga ega bo’lish
                  </p>
                </li>
                <li className="st-num-item">
                  <img className="st-num-img" src={second} alt="" />
                  <strong className="st-num-title">Instrumenlar</strong>
                  <p className="st-num-text">
                    it mutaxassisi uchun kerakli barcha instrumentlarga ega
                    bo’lishlik
                  </p>
                </li>
                <li className="st-num-item">
                  <img className="st-num-img" src={third} alt="" />
                  <strong className="st-num-title">
                    Darajaning yuksalishi
                  </strong>
                  <p className="st-num-text">
                    it mutaxassislikning ilk asosiy darajasiga chiqish imkoni
                  </p>
                </li>
              </div>
              <div className="disf">
                <li className="st-num-item">
                  <img className="st-num-img" src={fourth} alt="" />
                  <strong className="st-num-title">WEB SITE</strong>
                  <p className="st-num-text">veb sayt yaratish imkoni</p>
                </li>
                <li className="st-num-item">
                  <img className="st-num-img" src={fifth} alt="" />
                  <strong className="st-num-title">Telegram BOT</strong>
                  <p className="st-num-text">Telegram BOT yaratish imkoni</p>
                </li>
                <li className="st-num-item">
                  <img className="st-num-img" src={sixth} alt="" />
                  <strong className="st-num-title">Stajor sifatida</strong>
                  <p className="st-num-text">
                    Matrix IT Academy kompaniyasida Stajor sifatida faoliyat
                    yurutish imkoni
                  </p>
                </li>
              </div>
            </ul>
          </div>
          <div className="student-bottom-wrap">
            <div className="st-text-box">
              <h2 className="student-title">
                O’quvchilarimizning <br />
                REAL fikrlari
              </h2>
              <p className="student-text">*chempionlar shu yerda yaratiladi!</p>
            </div>
            <ul className="st-list">
              <li className="st-item">
                <div className="st-item-wrap">
                  <img className="st-item-img" src="" alt="" />
                  <div className="st-item-text-box">
                    <strong className="st-item-name">Aziz</strong>
                    <p className="st-item-age">16 yosh</p>
                  </div>
                </div>
                <p className="st-item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit rem illo quidem commodi eum natus quo aliquam architecto
                  ratione optio animi dicta voluptas vel, dolor labore
                  perspiciatis sequi dolore quam consequuntur obcaecati iste!
                  Laboriosam dicta numquam consequuntur quis qui odit, omnis at
                  reprehenderit eveniet quos, officiis tenetur dolore, sit
                  impedit!
                </p>
              </li>
              <li className="st-item">
                <div className="st-item-wrap">
                  <img className="st-item-img" src="" alt="" />
                  <div className="st-item-text-box">
                    <strong className="st-item-name">Aziz</strong>
                    <p className="st-item-age">16 yosh</p>
                  </div>
                </div>
                <p className="st-item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit rem illo quidem commodi eum natus quo aliquam architecto
                  ratione optio animi dicta voluptas vel, dolor labore
                  perspiciatis sequi dolore quam consequuntur obcaecati iste!
                  Laboriosam dicta numquam consequuntur quis qui odit, omnis at
                  reprehenderit eveniet quos, officiis tenetur dolore, sit
                  impedit!
                </p>
              </li>
              <li className="st-item">
                <div className="st-item-wrap">
                  <img className="st-item-img" src="" alt="" />
                  <div className="st-item-text-box">
                    <strong className="st-item-name">Aziz</strong>
                    <p className="st-item-age">16 yosh</p>
                  </div>
                </div>
                <p className="st-item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit rem illo quidem commodi eum natus quo aliquam architecto
                  ratione optio animi dicta voluptas vel, dolor labore
                  perspiciatis sequi dolore quam consequuntur obcaecati iste!
                  Laboriosam dicta numquam consequuntur quis qui odit, omnis at
                  reprehenderit eveniet quos, officiis tenetur dolore, sit
                  impedit!
                </p>
              </li>
              <li className="st-item">
                <div className="st-item-wrap">
                  <img className="st-item-img" src="" alt="" />
                  <div className="st-item-text-box">
                    <strong className="st-item-name">Aziz</strong>
                    <p className="st-item-age">16 yosh</p>
                  </div>
                </div>
                <p className="st-item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit rem illo quidem commodi eum natus quo aliquam architecto
                  ratione optio animi dicta voluptas vel, dolor labore
                  perspiciatis sequi dolore quam consequuntur obcaecati iste!
                  Laboriosam dicta numquam consequuntur quis qui odit, omnis at
                  reprehenderit eveniet quos, officiis tenetur dolore, sit
                  impedit!
                </p>
              </li>
              <li className="st-item">
                <div className="st-item-wrap">
                  <img className="st-item-img" src="" alt="" />
                  <div className="st-item-text-box">
                    <strong className="st-item-name">Aziz</strong>
                    <p className="st-item-age">16 yosh</p>
                  </div>
                </div>
                <p className="st-item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit rem illo quidem commodi eum natus quo aliquam architecto
                  ratione optio animi dicta voluptas vel, dolor labore
                  perspiciatis sequi dolore quam consequuntur obcaecati iste!
                  Laboriosam dicta numquam consequuntur quis qui odit, omnis at
                  reprehenderit eveniet quos, officiis tenetur dolore, sit
                  impedit!
                </p>
              </li>
              <li className="st-item">
                <div className="st-item-wrap">
                  <img className="st-item-img" src="" alt="" />
                  <div className="st-item-text-box">
                    <strong className="st-item-name">Aziz</strong>
                    <p className="st-item-age">16 yosh</p>
                  </div>
                </div>
                <p className="st-item-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit rem illo quidem commodi eum natus quo aliquam architecto
                  ratione optio animi dicta voluptas vel, dolor labore
                  perspiciatis sequi dolore quam consequuntur obcaecati iste!
                  Laboriosam dicta numquam consequuntur quis qui odit, omnis at
                  reprehenderit eveniet quos, officiis tenetur dolore, sit
                  impedit!
                </p>
              </li>
            </ul>
          </div>
          <div className="whodevelopers-btn">
            <a href="#ds" onClick={toggleModal}>darxol kursga yozilaman</a>
            <img src={heroRight} alt=". . . . " />
            {showModal && (
                <div className="modal-box">
         <div className="modal">
         <div className="modal-top">
           <button className="modal-top-btn" onClick={() => setShowModal(false)}>
             <img src={CloseModal} alt="Downloading . . ." />
           </button>
         </div>
         <h3 className="modal-mid">Kursga yozilish</h3>
         <h3 className="modal-title">Foundation</h3>
         <p className="modal-desc">DASTURLASH KURSI</p>
         <form className="modal-form">
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
                </div>
      )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
