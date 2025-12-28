// import React from 'react'
import '../../../style/login.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function ForgetEmailSubmission() {

    const [email, setEmail] = useState()
    const location = useLocation()
    const navigate = useNavigate()

    const SentOtp = () => {
        const showLoading = () => {
            Swal.fire({
                text: 'Please Wait We are Sending OTP to Your Email...Do not Refresh or Back the Page',
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
        const id = location.state
        // alert(id)
        if (id == "Student ID") {
            fetch('http://127.0.0.1:8081/forgetSendMail?mailid=' + email, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(response => {

                if (response.ok) {
                    // alert("Mail sent")
                    Swal.fire({
                        title: 'Success!',
                        text: 'OTP Sent Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    // navigate("/Submission", { state: id });
                    navigate("/forgetOtp")
                }
                else {
                    // alert("Mail does not exist")
                    Swal.fire({
                        title: 'Error!',
                        text: 'Mail does not exist',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
            }).catch(console.error())
        }
        else {
            fetch('http://127.0.0.1:8081/forgetSendMailFaculty?mailid=' + email, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(response => {

                if (response.ok) {
                    //   alert("Mail sent")
                    Swal.fire({
                        title: 'Success!',
                        text: 'OTP Sent Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    //   navigate("/otpSubmissionFaculty", { state: id });
                    navigate("/forgetOtpFaculty")
                }
                else {
                    //   alert("Mail does not exist")/
                    Swal.fire({
                        title: 'Error!',
                        text: 'Mail does not exist',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
            }).catch(console.error())
        }

    }

    return (
        <div className="outerWrapper" style={{ marginTop: "0" }}>
            <div className="wrapper">
                {/* <form action="#" method="post"> */}
                <h2 style={{ color: "white" }}>Forget Password ?</h2>
                <div className="input-field">
                    <input type="text" name="tbOTP" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Registered Email</label>
                </div>
                <button name="bVerify" onClick={SentOtp}>
                    Send OTP
                </button>
                {/* </form> */}
            </div>
        </div>
    )
}
