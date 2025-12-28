import React, { useState, useEffect } from 'react';
import '../../style/RegistrationForm.css';
import { addFaculty } from '../../Services/faculty_api';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddFaculty() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])

    function randomID() {
        return Math.floor(Math.random() * (999999 - 100000) + 100000);
    }

    const randomid = randomID();

    let navigate = useNavigate();

    const [faculty, setFaculty] = useState({
        id: randomid,
        name: "",
        email: "",
        pass: "",
        type: "FACULTY",
    });

    const { name, email, pass } = faculty;

    const onInputChange = (e) => {
        setFaculty({ ...faculty, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        // const showLoading = () => {
        //     Swal.fire({
        //         text: 'Please Wait We are Sending Details to the Faculty...Do not Refresh or Back the Page',
        //         icon: 'success',
        //         showConfirmButton: false,
        //         allowOutsideClick: false,
        //         willOpen: () => {
        //             Swal.showLoading();
        //         }
        //     })
        // }
        // showLoading();
        e.preventDefault();
        await addFaculty(faculty, email);
        

        navigate("/adminPanel");
    };




    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/adminPanel`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Faculty Registration</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                    required
                                />
                            </div>

                            <div className="input-box">
                                <span className="details">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                    required
                                />

                            </div>

                            <div className="input-box">
                                <span className="details">Password</span>
                                <input
                                    type="password"
                                    name="pass"
                                    placeholder="Enter Password"
                                    value={pass}
                                    onChange={(e) => onInputChange(e)}
                                    required
                                />
                            </div>

                        </div>

                        <div className="button">
                            <input type="submit" value="Register Now" />
                            {/* <button>Register Now</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
