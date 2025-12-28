import React, { useState } from 'react';
import '../../../../style/RegistrationForm.css'
// import { editStudentPass } from '../../../../../Services/student_api';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ChangePassFormFaculty() {

    const navigate = useNavigate();

    const [newPass, setNewPass] = useState();



    const onInputChange = (e) => {
        setNewPass(e.target.value)
    };

    const newPassChange = (e) => {
        fetch('http://127.0.0.1:8081/changeNewPassFaculty?newPass=' + newPass, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }).then(response => {

            if (response.ok) {

                Swal.fire({
                    title: 'Success!',
                    text: 'New Password Set',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate('/loginTeacher')
                // alert("New PassWord Set")
            }
            else {
                // alert("password cant change")
                Swal.fire({
                    title: 'Error!',
                    text: 'Password Change Failed',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                // window.location.href = "http://localhost:3000/loginTeacher";
                navigate('/loginTeacher')
            }
        }).catch(console.error())
    };


    return (
        <div className="regForm regFormChangePass">
            <div className="container containerReg">
                <Link to={`/forgetEmailSubmission`}>
                    <button className="back-button">CANCEL</button>
                </Link>

                <div className="title" style={{ marginBottom: "10px" }}>Change Password</div>
                <div className="content">
                    {/* <form onSubmit={(e) => onSubmit(e)}> */}
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">New Password</span>
                            <input
                                type="text"
                                name="pass"
                                placeholder="Enter your new Password"
                                value={newPass}
                                onChange={(e) => onInputChange(e)}
                                required
                                style={{ marginBottom: "15px" }}
                            />
                        </div>
                    </div>


                    <div className="button">
                        {/* <input type="submit" value="Submit" /> */}

                        <button onClick={newPassChange}>Change</button>
                    </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}
