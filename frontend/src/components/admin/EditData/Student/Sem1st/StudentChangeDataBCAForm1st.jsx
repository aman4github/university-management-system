import React, { useState, useEffect } from 'react';
import '../../../../../style/RegistrationForm.css'
import { getStudentById, updateStudent } from '../../../../../Services/student_api';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function StudentChangeDataBCAForm1st() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadUser();
    }, [])

    const { id } = useParams();

    function randomID() {
        return Math.floor(Math.random() * (999999 - 100000) + 100000);
    }

    const randomid = randomID();

    let navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const { name, email, phno } = student;

    const onInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
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
        await updateStudent(student, id);


        navigate("/adminallStudentDataBCA1st");
    };

    const loadUser = async () => {
        const result = await getStudentById(id);
        setStudent(result.data);
    };

    

    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/adminallStudentDataBCA1st`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Student Edit Form</div>
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
                                <span className="details">Phone Number</span>
                                <input
                                    type="text"
                                    name="phno"
                                    placeholder="Enter your number"
                                    value={phno}
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


                        </div>

                        <div className="button">
                            <input type="submit" value="Update" />
                            {/* <button>Register Now</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
