import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { RiStarSFill } from 'react-icons/ri'
import { Signin } from "../style/index";
import Joi from "joi-browser";



export default class Reviews extends Component {
    state = {
        data: { name: "", textarea: "" },
        errors: {},
    }

    schema = {
        phone: Joi.string().required().label("Name"),
        password: Joi.string().required().label("TextArea"),
    };

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
        if (name === "name") {
            if (value.trim() === "") return "Name is required";
        }
        if (name === "textarea") {
            if (value.trim() === "") return "TextArea is required";
        }
    };

    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, {
            abortEarly: false,
        });

        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    formHandler = (e) => {
        e.preventDefault();

        const errors = this.validate();

        console.log(errors, "errors coming!!!!");

        this.setState({ errors: errors || {} });

        if (errors) return;

        console.log("form submitted");
    };

    render() {
        const { data, errors } = this.state;
        return (
            < Signin >
                <form onSubmit={this.formHandler} className='review'>
                    <div className='header'>
                        <MdClose onClick={this.props.closeHandler} className='close' />
                        <h4>Добавить отзыв</h4>
                        <div className='like'>
                            <p>Ваша оценка:</p>
                            <span>
                                <RiStarSFill className='activeStar' />
                                <RiStarSFill className='activeStar' />
                                <RiStarSFill className='activeStar' />
                                <RiStarSFill className='activeStar' />
                                <RiStarSFill className='activeStar' />
                            </span>
                        </div>

                    </div>
                    <div className='review__inputs'>
                        <div>
                            <label>Ваше имя:</label>
                            <input
                                type='text'
                                placeholder='Введите Ваше имя'
                                autoFocus
                                name='name'
                                value={data.name}
                                onChange={this.inputHandler}
                            />
                        </div>
                        <p>{errors.name}</p>
                        <div >
                            <label>Ваш отзыв:</label>
                            <textarea
                                rows='5'
                                cols='26'
                                name='textarea'
                                style={{ resize: 'none', outline: 'none' }}
                                value={data.textarea}
                                onChange={this.inputHandler}
                            />
                        </div>
                        <p>{errors.textarea}</p>
                    </div>
                    <button className='review__button' >Добавить отзыв</button>
                </form>
            </Signin >
        )
    }
}
