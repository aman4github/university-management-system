import React, { useState } from 'react';
// import '../../../../../style/RegistrationForm.css'
// import { editStudentPass } from '../../../../../Services/student_api';
import { Link, useNavigate, useParams,useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ChangePassForm() {

    const navigate = useNavigate();

    const [newPass, setNewPass] = useState();
    


    const onInputChange = (e) => {
        setNewPass(e.target.value)
    };

    const newPassChange= (e) => {
        fetch('http://127.0.0.1:8081/changeNewPass?newPass=' + newPass, {
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
                    navigate('/loginStudent')
                    // alert("New PassWord Set")
            }
            else {
                // alert("password cant change")
                Swal.fire({
                    title: 'Success!',
                    text: 'Password Change Failed',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                // window.location.href = "http://localhost:3000/loginStudent";
                navigate("/loginStudent");
            }
        }).catch(console.error())
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/forgetEmailSubmission`}>
                    <button className="back-button">CANCEL</button>
                </Link>

                <div className="title"  style={{marginBottom: "50px"}}>Change Password</div>
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
                                    style={{marginBottom: "30px"}}
                                />
                            </div>                          
                        </div>


                        <div className="button"  style={{marginBottom: "50px"}}>
                            {/* <input type="submit" value="Register Now" /> */}
                            <button onClick={newPassChange}>Change</button>
                            
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}
