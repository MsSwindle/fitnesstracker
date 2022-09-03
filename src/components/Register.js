
import React, { useState } from "react";
import { userRegistration } from "../api";
import { Link } from "react-router-dom";

function Register (props) {
    const [token, setToken, username, setUsername, itWorks, setItWorks] = [props.token, props.setToken, props.username, props.setUsername, props.itWorks, props.setItWorks];
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = async (event) => {
        event.preventDefault();
        const result = await userRegistration(username, password);
        setMessage(result.message);
        if (result.token) {
            console.log(token, "wuuut");
            setToken(result.token);
            localStorage.setItem("token", result.token);
            localStorage.setItem("username", username);
        } else {
            setItWorks(false)
            setMessage('User already exists!')
    }
   
    };
    return (
    <div id='register'>
        <form onSubmit={submitHandler}>
        <h3 className='reg-here'>Register Here:</h3>
            <div className='register-form'>
                <label>Create Username: </label>
                <input 
                type='text'
                name='login'
                autoComplete="off"
                required={true}
                onChange={(event) => {
            setUsername(event.target.value);
                }}
                ></input><br/>
                <label>Create Password: </label>
                <input 
                type='text'
                name='password'
                autoComplete="off"
                required={true}
                onChange={(event) => {
            setPassword(event.target.value);
        }}
            ></input><br/>
            </div>
            {itWorks ? null : <span>{message}</span>}
            <button className='create-account' type='submit'>Create Account</button><br />
            <Link to='/login'>Already Registered? Click Here!</Link>
        </form>
    </div>
    )};

export default Register