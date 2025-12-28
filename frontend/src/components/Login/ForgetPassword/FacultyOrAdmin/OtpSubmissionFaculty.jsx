import React from 'react'
import '../../../../style/login.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function OtpSubmissionFaculty() {

    let navigate = useNavigate();
    const location = useLocation()
    const data = location.state
    // alert(data)
    const [otp, setOtp] = useState()

    const checkOtp = () => {
        fetch('http://127.0.0.1:8081/checkOtpFaculty?otp=' + otp, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }).then(response => {

            if (response.ok) {
                localStorage.setItem("faculty-id",data)
                if(data!=0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'OTP Verified Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    // setTimeout(() => {
                    //     window.location.href = "http://localhost:3000/facultyPanel";
                    // }, 2000);
                    navigate("/facultyPanel");
                    
                }
                else{
                    Swal.fire({
                        title: 'Success!',
                        text: 'OTP Verified Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    // setTimeout(() => {
                    //     window.location.href = "http://localhost:3000/adminPanel";
                    // }, 2000);
                    navigate("/adminPanel");
                    
                }
            }
            else {
                // alert("Wrong OTP")
                Swal.fire({
                    title: 'Error!',
                    text: 'Wrong OTP',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                if(data!=0){
                    // window.location.href = "http://localhost:3000/loginTeacher";
                    navigate("/loginTeacher");
                }
                else{
                    // window.location.href = "http://localhost:3000/loginAdmin";
                    navigate("/loginAdmin");
                }
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
