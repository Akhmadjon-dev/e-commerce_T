import React, { Component, createRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { VscKey } from "react-icons/vsc";
import Joi from "joi-browser";
import SignUp from "./SignUp";
import { Signin } from "../style/index";

export default function SignIn() {
  const [isShow, setIsShow] = useState(false)
  const [data, setData] = useState({ phone: "", password: "" })
  const [errors, setErrors] = useState({})

  const schema = {
    phone: Joi.string().required().label("Phone"),
    password: Joi.string().required().label("Password"),
  };

  const modalHandler = () => {
    this.setIsShow(!isShow);
  };

  const inputHandler = ({ target: input }) => {
    const errors = { ...errors };

    const errorMsg = validateProperty(input);

    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const data = { ...data };
    data[input.name] = input.value;

    setData(data);
    setErrors(errors);
  };

  const validateProperty = ({ name, value }) => {
    if (name === "phone") {
      if (value.trim() === "") return "Phone is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  const validate = () => {
    const { error } = Joi.validate(data, schema, {
      abortEarly: false,
    });

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const formHandler = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors || {});

    if (errors) return;

  };

  return (
    <Signin>
      {isShow ? (
        <SignUp closeHandler={modalHandler} />
      ) : (
        <form onSubmit={formHandler} className="sign">
          <div className="header">
            <MdClose className="close" />
            <BiUser className="user" />
            <h4>Войти в личный кабинет</h4>
          </div>
          <div className="inputs">
            <div>
              <FiPhone className="tel" />
              <input
                onChange={inputHandler}
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
                onChange={inputHandler}
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
              <p onClick={modalHandler}>Зарегистрироваться </p>
          </p>
        </form>
      )}
    </Signin>
  );
}
