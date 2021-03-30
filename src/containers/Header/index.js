import React, { Component, useContext, useState } from "react";
import S from "../../style/pages/header";
import logo from "../../assets/img/Header/image2.png";
import logo1 from "../../assets/img/Header/image1.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import SignIn from "../../components/SignIn";
import { Context } from "../../store/context";
import { UserContext } from "../../store/userContext";
import SignUp from "../../components/SignUp";
import SendEmail from "../../components/SendEmail";

export default function Header(props) {
  const [isShow, setIsShow] = useState(false);
  const [signin, setSignin] = useState(false);
  const { context, setContext, decrement } = useContext(Context);
  const [usercontext, setUsercontext] = useContext(UserContext);
  console.log(usercontext, "user contexxttt", Object.values(usercontext.user));

  const modalHandler = () => {
    setIsShow(!isShow);
  };

  return (
    <S.Header>
      {isShow && <SignIn changeHandler={modalHandler} />}
      <nav>
        <HiOutlineMenuAlt2 className="hamburger" />
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/">
            <img src={logo1} alt="" />
          </Link>
        </div>
        <nav className="header__nav">
          <Link className="header__link" to="/">
            Меню
          </Link>
          <Link className="header__link" to="/deliver">
            Доставка
          </Link>
          <Link className="header__link" to="/oplata">
            Оплата
          </Link>
          <Link to="/data" className="header__link">
            Бронь стола
          </Link>
        </nav>
        <div className="header__num">
          <FiPhone className="phone" />
          <p className="header__tel">+7 (831) 282-60-00</p>
        </div>
        <div className="header__sign">
          {Object.values(usercontext.user).length ? (
            <Link to="/personal">
              <AiOutlineUser className="user" />
            </Link>
          ) : (
            <>
              <AiOutlineUser
                className="user"
                onClick={() =>
                  setUsercontext({ ...usercontext, isShow: "sign-in" })
                }
              />
            </>
          )}
          {usercontext.isShow === "sign-in" && <SignIn />}
          {usercontext.isShow === "sign-up" && <SignUp />}
          {usercontext.isShow === "send-email" && <SendEmail />}

          <div className="cart__block">
            <Link className="cart__icon" to="/reservation">
              <RiShoppingCartLine className="shoppingCart" />
            </Link>
            <span className="cart__num">{context?.length}</span>
          </div>
        </div>
      </nav>
    </S.Header>
  );
}
// export default class Header extends Component {
//   state = {
//     isShow: false,
//   };
//   modalHandler = () => {
//     this.setState((prevState) => ({ isShow: !prevState.isShow }));
//   };
//   render() {
//     const { isShow } = this.state;
//     console.log(isShow);
//     return (
//       <S.Header>
//         {isShow && <SignIn changeHandler={this.modalHandler} />}
//         <nav>
//           <HiOutlineMenuAlt2 className="hamburger" />
//           <div className="header__logo">
//             <Link to="/">
//               <img src={logo} alt="" />
//             </Link>
//             <Link to="/">
//               <img src={logo1} alt="" />
//             </Link>
//           </div>
//           <nav className="header__nav">
//             <Link className="header__link" to="/">
//               Меню
//             </Link>
//             <Link className="header__link" to="/deliver">
//               Доставка
//             </Link>
//             <Link className="header__link" to="/oplata">
//               Оплата
//             </Link>
//             <Link to="/reservation" className="header__link">
//               Бронь стола
//             </Link>
//           </nav>
//           <div className="header__num">
//             <FiPhone className="phone" />
//             <p className="header__tel">+7 (831) 282-60-00</p>
//           </div>
//           <div className="header__sign">
//             <Link to="/personal">
//               <AiOutlineUser className="user" />
//             </Link>

//             <div>
//             <Link to="/cart">
//               <RiShoppingCartLine className="shoppingCart" />
//             </Link>
//             <span className="cart__num">
//               {context.length}
//             </span>
//             </div>
//           </div>
//         </nav>
//       </S.Header>
//     );
//   }
// }
