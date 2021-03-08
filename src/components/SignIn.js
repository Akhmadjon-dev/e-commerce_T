import React, { Component, createRef } from "react";
import { MdClose } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { VscKey } from "react-icons/vsc";
import SignUp from "./SignUp";
import { Signin } from "../style/index";

export default class SignIn extends Component {
  state = {
    isShow: false,
    data: { phone: "", password: "" },
    errors: {
      // phone: "Phone is required",
      // password: "Password is required",
    },
  };

  modalHandler = () => {
    this.setState((prevState) => ({ isShow: !prevState.isShow }));
  };

  // inputHandler = (e) => {
  //   const { name, value } = e.target;
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     data: { ...prevState.data, [name]: value },
  //   }));

  inputHandler = ({ target: input }) => {
    const errors = { ...this.state.errors };

    const errorMsg = this.validateProperty(input);

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    console.log(errors, "input error");
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
    console.log(this.state.data);
  };

  validateProperty = ({ name, value }) => {
    if (name === "phone") {
      if (value.trim() === "") return "Phone is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;

    if (data.password.trim() === "") errors.password = "Password is required";
    if (data.phone.trim() === "") errors.phone = "Phone is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  formHandler = (e) => {
    e.preventDefault();

    const errors = this.validate();

    console.log(errors, "errors coming!!!!");

    this.setState({ errors: errors || {} });

    if (errors) return;

    console.log("form submitted");

    // let formData = new FormData();
    // formData.append("phone", phone);
    // formData.append("password", password);

    // call  server
  };

  render() {
    const { isShow, data, errors } = this.state;
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
                  value={data.phone}
                  autoFocus
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                />
              </div>
              <p>{errors.phone}</p>
              <div>
                <VscKey className="kalit" />
                <input
                  onChange={this.inputHandler}
                  value={data.password}
                  name="password"
                  type="password"
                  placeholder="Пароль"
                />
              </div>
              <p>{errors.password}</p>
            </div>
            <p className="link">Забыли пароль?</p>
            <button className="signin__button">Войти</button>
            <p className="signin__p">
              Впервые у нас?
              <p onClick={this.modalHandler}>Зарегистрироваться </p>
            </p>
          </form>
        )}
      </Signin>
    );
  }
}
