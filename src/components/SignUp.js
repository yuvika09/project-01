import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Common.css';
import axios from 'axios';

const SignUp = () => {
    const [formValue, setFormValue] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
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

        if (!values.username) {
            errors.username = "*Username required!";
        }

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

        if (!values.password2) {
            errors.password2 = '*Password required!';
        }
        else if (values.password2 !== values.password) {
            errors.password2 = '*Passwords do not match!'
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setSubmit(true);
    };
    const baseUrl = "https://jsonplaceholder.typicode.com/posts";
    const saveUser = () => {
        const { username, email, password } = formValue;
        axios.post(baseUrl, { username, email, password })
            // fetch("https://jsonplaceholder.typicode.com/posts", {
            //     method: 'POST',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({name, email, password})
            // })
            .then(response => {
                console.log("Response", response);
                if (response.status == 201) {
                    alert("Success")
                }
            })
            .catch(error => {
                console.log("Error", error);
            })
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && submit) {
            console.log(formValue);
        }
    }, [formErrors]);


    return (
        <>
            <div id="big-container">
                <div className="small-container" id="signup-side">
                    <form onSubmit={handleSubmit} className='signup-form' id="signup-container">
                        <div>
                            <h2 className='heading'>Sign Up</h2>
                        </div>
                        <div className='form-inputs'>
                            {/* <label htmlFor="username" className='form-label'>Username: </label> */}
                            <input type="text" name='username' className='form-input' placeholder='Enter Username' id='username' value={formValue.username} onChange={handleChange} />
                            <p className='error'>{formErrors.username}</p>
                        </div>
                        <div className='form-inputs'>
                            {/* <label htmlFor="email" className='form-label'>Email: </label> */}
                            <input type="text" name='email' className='form-input' placeholder='Enter Email' id='email' value={formValue.email} onChange={handleChange} />
                            <p className='error'>{formErrors.email}</p>
                        </div>
                        <div className='form-inputs'>
                            {/* <label htmlFor="password" className='form-label'>Password: </label> */}
                            <input type="password" name='password' className='form-input' placeholder='Enter Password' id='password' value={formValue.password} onChange={handleChange} />
                            <p className='error'>{formErrors.password}</p>
                        </div>
                        <div className='form-inputs'>
                            {/* <label htmlFor="password2" className='form-label'>Confirm Password: </label> */}
                            <input type="password" name='password2' className='form-input' placeholder='Confirm Password' id='password2' value={formValue.password2} onChange={handleChange} />
                            <p className='error'>{formErrors.password2}</p>
                        </div>
                        <button className='form-input-btn' type='submit' onClick={saveUser}>
                            SIGN UP
                        </button>
                    </form>
                </div>
                <div className="small-container" id="login-side">
                    <h2 className='heading' id="side-heading">Welcome Back!</h2><br />
                    <p className='text'>Already have an account. Please login into your account here.</p>
                    <NavLink to="/login">
                        <button id="link-btn">LOGIN</button>
                    </NavLink>
                </div>
            </div>



















        </>
    );
};

export default SignUp;
