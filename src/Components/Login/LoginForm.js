import React, { useEffect, useState } from "react";
import { Input, message } from "antd";
import * as Yup from 'yup';
import ReactDatePicker from "react-datepicker";
import swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import { FormWrapper, InputWrapper } from "./Style/LoginStyle";

const signupSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
        .min(5, 'Password must be at least 5 characters')
});


function LoginForm(props) {
    const history = useHistory();

    const formOptions = { validationSchema: signupSchema, mode: 'onChange', validateCriteriaMode: "all", };
    const key = 'updatable';

    const { handleSubmit, control, setValue } = useForm(formOptions);
    const onSubmit = (data) => {
        if (data.username == 'admin' && data.password == 'admin') {
            console.log(data);
            history.push(`/to-do`);
        } else if(!data.username || !data.password) {
            swal.fire(
                'ERROR !',
                'Fields cannot be empty',
                'error'
            );
        } else {
            swal.fire(
                'ERROR !',
                'Wrong Credentials',
                'error'
            );
        }
    }

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Controller
                        control={control}
                        id="username"
                        name="username"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Input
                                ref={ref}
                                onChange={onChange}
                                placeholder="Username"
                                className="form-group__input"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        id="password"
                        name="password"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Input
                                onChange={onChange}
                                placeholder="Password"
                                className="form-group__input"
                                type="password"
                            />
                        )}
                    />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">Log In</button>
        </FormWrapper>
    );
}

export default LoginForm;
