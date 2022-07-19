import * as React from "react"
import "./Login.css"
import { useState } from "react"

export default function Login() {

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        email: "",
        password: "",
      })

    // const {setUser} = useAuthContext()
    
      const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") <= 0) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }

      const loginUser = async () => {
        // const {data, error} = await apiClient.login({email: form.email, password: form.password})
        // if (error) {
        //   setErrors((e) => ({...e, form:error}))
        }
        

    //     if(data?.user) {
    //       setUser(data.user)
    //       apiClient.setToken(data.token)
    //       console.log("Here")
    //     }
    //   }

      
  return (
    <div className="login-page">
        <div className="card">
            <h2>Login</h2>
            <br></br>
            <div className="form">
                <div className="input-field">
                    <input className="form-input" type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleOnInputChange}/>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input-field">
                    <input className="form-input" type="password" name="password" placeholder="Password" value={form.password} onChange={handleOnInputChange}/>
                </div>
                <div className="sub-login">
                    <button className="submit-login" onClick={loginUser}>Login</button>
                
                    <button className="forgot-pass" >Forgot Password?</button>
                    <p>________________________________________________</p>
                    <button className="register" >Create New Account</button>
                </div>
                
            </div>
        </div>

        <div className="trending">
            FEATURED SECTION
        </div>
    </div>
  )
}
