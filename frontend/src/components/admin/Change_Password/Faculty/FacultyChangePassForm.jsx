import React, { useState } from 'react';
import '../../../../style/RegistrationForm.css'
import { editFacultyPass } from '../../../../Services/faculty_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

export default function FacultyChangePassForm() {
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
        await editFacultyPass(faculty, id);
        // Swal.fire({
        //     title: 'Success...',
        //     text: 'Password Changed Successfully',
        //     icon: 'success',
        //     confirmButtonText: 'OK'
        // })
        // setTimeout(() => {
        //     window.location.href = "http://localhost:3000/facultyChangePassword";
        // }, 2000);
        navigate("/facultyChangePassword");
    };

    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/facultyChangePassword`}>
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
