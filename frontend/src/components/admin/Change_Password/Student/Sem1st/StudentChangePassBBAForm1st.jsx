import React, { useState, useEffect } from 'react';
import '../../../../../style/RegistrationForm.css'
import { editStudentPass } from '../../../../../Services/student_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function StudentChangePassBBAForm1st() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])

    const { id } = useParams();

    let navigate = useNavigate();

    const [faculty, setFaculty] = useState({
        pass: "",
    });

    const { pass } = faculty;

    const onInputChange = (e) => {
        setFaculty({ ...faculty, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await editStudentPass(faculty, id);
        // Swal.fire({
        //     title: 'Success...',
        //     text: 'Password Changed Successfully',
        //     icon: 'success',
        //     confirmButtonText: 'OK'
        // })
        // setTimeout(() => {
        //     window.location.href = "http://localhost:3000/adminallStudentPassBBA1st";
        // }, 2000);
        navigate("/adminallStudentPassBBA1st");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/adminallStudentPassBBA1st`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Change Password</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">New Password</span>
                                <input
                                    type="text"
                                    name="pass"
                                    placeholder="Enter your Password"
                                    value={pass}
                                    onChange={(e) => onInputChange(e)}
                                    required
                                />
                            </div>
                            
                        </div>
                        
                        <div className="button">
                            <input type="submit" value="Submit" />
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
