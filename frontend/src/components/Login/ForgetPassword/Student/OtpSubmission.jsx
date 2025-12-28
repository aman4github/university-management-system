import React from 'react'
import '../../../../style/login.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function OtpSubmission() {

    let navigate = useNavigate();
    const location = useLocation()
    const data = location.state
    // alert(data)
    const [otp, setOtp] = useState()

    const checkOtp = () => {
        fetch('http://127.0.0.1:8081/checkOtp?otp=' + otp, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }).then(response => {

            if (response.ok) {
                fetch('http://127.0.0.1:8081/sendSem?id=' + data, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(response => {
                    if (response.ok) {

                        Swal.fire({
                            title: 'Success!',
                            text: 'OTP Verified Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })


                        response.json().then(stu => {
                            // Assuming 'data' is defined and contains the ID
                            localStorage.setItem("id", data);
                            localStorage.setItem("name", stu.name);
                            localStorage.setItem("sem", stu.sem);
                            localStorage.setItem("stream", stu.stream);
                            // alert("Welcome " + stu.name);
                            setTimeout(() => {
                                Swal.fire({
                                    title: 'Welcome ' + stu.name,
                                    confirmButtonText: 'OK'
                                })
                            }, 1500);
                            setTimeout(() => {
                                navigate("/StudentPanel");
                                // window.location.href = "http://localhost:3000/StudentPanel";
                            }, 3000);


                        }).catch(error => {
                            console.error('Error parsing JSON:', error);
                        });
                    }
                })
            }
            else {
                // alert("Wrong OTP")
                Swal.fire({
                    title: 'Error!',
                    text: 'Wrong OTP',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                navigate("/loginStudent");
                // window.location.href = "http://localhost:3000/loginStudent";
            }
        }).catch(console.error())
    }

    return (
        <div className="outerWrapper" style={{ marginTop: "0" }}>
            <div className="wrapper">
                {/* <form action="#" method="post"> */}
                <h2 style={{ color: "white" }}>OTP VERIFICATION</h2>
                <div className="input-field">
                    <input type="text" name="tbOTP" required value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <label>OTP</label>
                </div>
                <button type="submit" name="bVerify" onClick={checkOtp}>
                    VERIFY
                </button>
                {/* </form> */}
            </div>
        </div>
    )
}
