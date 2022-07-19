import * as React from "react"
import "./RegisterForm.css"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function RegisterForm(){
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const handleOnInputChange = (event) => {
        if(event.target.name == "password"){
            if(form.confirm_password && form.confirm_password !== event.target.value){
                setErrors((e) => ({ ...e, confirm_password: "Password's do not match"}))
            }else{
                setErrors((e) => ({ ...e, confirm_password: null}))
            }
        }
        if(event.target.name === "confirm_password"){
            if(form.password && form.password !== event.target.value){
                setErrors((e) => ({ ...e, confirm_password: "Password's do not match"}))
            }else{
                setErrors((e) => ({ ...e, confirm_password: null}))
            }
        }
        if(event.target.name === "email"){
            if(event.target.value.indexOf("@") === -1){
                setErrors((e) => ({ ...e, email: "Please enter a valid email."}))
            }else{
                setErrors((e) => ({ ...e, email: null}))
            }
        }

        setForm((f) => ({ ...f, [event.target.name]: event.target.value}))
    }
    return (
        <div className="register-form-container">
            <div className="inputs">
                <div className="title">
                    <p>Sign Up</p>
                    {errors.form && <span className="error">{errors.form}</span>}
                </div>
                <div className="split-form-input">
                    <div className="form-input">
                        <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleOnInputChange}/>
                        {errors.first_name && <span className="error">{errors.first_name}</span>}
                    </div>
                    <div className="form-input">
                        <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleOnInputChange}/>
                        {errors.last_name && <span className="error">{errors.last_name}</span>}
                    </div>
                </div>
                <div className="form-input">
                    <input type="text" name="email" placeholder="Email Address" value={form.email} onChange={handleOnInputChange}/>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-input">
                    <input type="text" name="password" placeholder="Password" value={form.password} onChange={handleOnInputChange} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="form-input">
                    <input type="text" name="confirm_password" placeholder="Confirm Password" value={form.confirm_password} onChange={handleOnInputChange}/>
                    {errors.confirm_password && <span className="error">{errors.confirm_password}</span>}
                </div>
                <div className="footer">
                    <button className="sign-up-btn">Sign Up</button>
                    <p>
                        Already a Member?
                        <a href="">Sign in</a>
                    </p>
                </div>
            </div>
            <div className="featured">
                hello
            </div>
        </div>
    )
}