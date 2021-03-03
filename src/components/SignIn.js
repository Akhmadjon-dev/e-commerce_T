import React, { Component, createRef } from "react";
import { MdClose } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { VscKey } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import { Signin } from "../style/index";

export default class SignIn extends Component {
  state = {
    isShow: false,
    data: { phone: "", password: "", file: "" },
  };

  modalHandler = () => {
    this.setState((prevState) => ({ isShow: !prevState.isShow }));
  };
  inputHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      data: { ...prevState.data, [name]: value },
    }));
    console.log(name, value);
  };

  formHandler = (e) => {
    const { phone, password, file } = this.state.data;
    e.preventDefault();
    let formData = new FormData();
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("file", file);

    // fetch
    //   .post("/api/users", {
    //     method: "POST",
    //     body: formData,
    //   })
    //   .then((res) => {});
  };

  render() {
    const { isShow, data } = this.state;
    return (
      <Signin>
        {isShow ? (
          <SignUp closeHandler={this.modalHandler} />
        ) : (
          <form onSubmit={this.formHandler} className="sign">
            <div className="header">
              <MdClose onClick={this.props.changeHandler} className="close" />
              <BiUser className="user" />
              <h4>Войти в личный кабинет</h4>
            </div>
            <div className="inputs">
              <div>
                <FiPhone className="tel" />
                <input
                  onChange={this.inputHandler}
                  defaultValue={data.phone}
                  autoFocus
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                />
              </div>
              <div>
                <VscKey className="kalit" />
                <input
                  onChange={this.inputHandler}
                  defaultValue={data.password}
                  name="password"
                  type="password"
                  placeholder="Пароль"
                />
              </div>
            </div>
            <Link className="link">Забыли пароль?</Link>
            <button className="signin__button">Войти</button>
            <p className="signin__p">
              Впервые у нас?
              <Link onClick={this.modalHandler}>Зарегистрироваться </Link>
            </p>
          </form>
        )}
      </Signin>
    );
  }
}
