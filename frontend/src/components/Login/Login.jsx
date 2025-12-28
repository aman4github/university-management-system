import React from 'react'
import { useState } from 'react'
import '../../style/login.css'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';



export default function Login(props) {

    const [id, setId] = useState()
    const [pass, setPass] = useState()


    const navigate = useNavigate();


    const clearError = () => {
        const showLoading = () => {
            Swal.fire({
                text: 'Please Wait We are generating OTP for You...Do not Refresh or Back the Page',
                icon: 'success',
                showConfirmButton: false,
                allowOutsideClick: false,
                willOpen: () => {
                    Swal.showLoading();
                }
            })
        }
        showLoading();
        // alert("in fun")
        // alert(props.id)
        if (props.id == "Student ID") {
            fetch('http://127.0.0.1:8081/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({ id: id, pass: pass })

            }).then(response => {
                if (response.ok) {
                    // alert("OTP Sent to your Registered Email Id");
                    Swal.fire({
                        text: 'OTP Sent to your Registered Email Id',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false
                    })
                    navigate("/otpSubmission", { state: id });
                }
                else {
                    // alert("Wrong User Id or Password")
                    Swal.fire({
                        title: 'Error!',
                        text: 'Wrong User Id or Password',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        allowOutsideClick: false
                    })
                    setId('');
                    setPass('');
                }

            }).catch(error => {
                console.error()
                alert("Wrong User Id or Password")
            })
        }
        else {
            fetch('http://127.0.0.1:8081/FacultysignIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({ id: id, pass: pass })

            }).then(response => {
                if (response.ok) {
                    // alert("OTP Sent to your Registered Email Id");
                    Swal.fire({
                        text: 'OTP Sent to your Registered Email Id',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate("/otpSubmissionFaculty", { state: id });
                }
                else {
                    // alert("Wrong Faculty Id or Password")
                    Swal.fire({
                        title: 'Error!',
                        text: 'Wrong User Id or Password',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                    setId('');
                    setPass('');
                }

            }).catch(error => {
                console.error()
                // alert("Wrong Faculty Id or Password")
            })

        }

    }

    return (
        <div className="outerWrapper">
            <div className="wrapper">
                <h2 style={{ color: "white" }}>Login</h2>
                <div className="input-field">
                    <input type="text" name="txtusername" required value={id} onChange={(e) => setId(e.target.value)} />
                    <label>{props.id}</label>
                </div>
                <div className="input-field">
                    <input type="password" name="txtpassword" required value={pass} onChange={(e) => setPass(e.target.value)} />
                    <label>Password</label>
                </div>


                <button type="submit" onClick={clearError}>Log In</button>
                <div className="register">
                    <p>Forgot Password?
                        <button style={{
                            border: "none",
                            background: "transparent",
                            color: "white",
                            padding: "0 0 0 4px",
                            fontSize: "15px",
                            fontWeight: "normal"
                        }} onClick={() => { navigate("/forgetEmailSubmission", { state: props.id }); }}>Click Here</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
