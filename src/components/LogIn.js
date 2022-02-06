import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Common.css';

const LogInPage = () => {

    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    });
    const [formErrors, setFormErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({ ...formValue, [name]: value });
        console.log(formValue);
    };

    const validate = (values) => {
        const errors = {};
        const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        const regexPass = /^[a-zA-Z0-9@#!$%^_]{8,}$/;

        if (!values.email) {
            errors.email = "*Email required!";
        }
        else if (!regexEmail.test(values.email)) {
            errors.email = "*Email Address invalid!"
        }

        if (!values.password) {
            errors.password = '*Password required!';
        }
        else if (values.password.length < 6) {
            errors.password = '*Choose password of more than 6 digit!';
        }
        else if (!regexPass.test(values.password)) {
            errors.password = '*Password invalid!';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && submit) {
            console.log(formValue);
        }
    }, [formErrors]);

    const baseUrl = "https://jsonplaceholder.typicode.com/posts";
    const saveUser = () => {
        axios.post(baseUrl, { formValue })
            // fetch("https://jsonplaceholder.typicode.com/posts", {
            //     method: 'POST',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formValue)
            // })
            .then(response => {
                console.log("Response", response);
                if (response.status == 201) {
                    alert("Success")
                }
            })
            .catch(error => {
                console.log("Error is ", error);
            })
    };

    return (
        <>
            <div id="big-container">
                <div className="small-container" id="login-side">
                    <h2 className='heading' id="side-heading">Hello, Friend!</h2><br />
                    <p className='text'>Create an account and start your journey with us.</p>
                    <NavLink to="/">
                        <button id="link-btn">SIGN UP</button>
                    </NavLink>
                </div>


                <div className="small-container" id="signup-side">
                    <form onSubmit={handleSubmit} className='signup-form' id="container">
                        <div>
                            <h1 className='heading' id='login-heading'>Log In</h1>
                        </div>

                        <div className='form-inputs-login'>
                            {/* <label htmlFor="email" className='form-label'>Email: </label> */}
                            <input type="text" name='email' className='form-input-login' placeholder='Enter Email' id='email' value={formValue.email} onChange={handleChange} />
                            <p className='error'>{formErrors.email}</p>
                        </div>

                        <div className='form-inputs-login'>
                            {/* <label htmlFor="password" className='form-label'>Password: </label> */}
                            <input type="password" name='password' className='form-input-login' placeholder='Enter Password' id='password' value={formValue.password} onChange={handleChange} />
                            <p className='error'>{formErrors.password}</p>
                        </div>

                        <button className='form-input-btn' type='submit' onClick={saveUser}>
                            LOGIN
                        </button>
                        <br />
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogInPage;