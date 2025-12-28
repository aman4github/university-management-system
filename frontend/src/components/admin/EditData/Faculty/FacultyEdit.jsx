import React, { useEffect, useState } from 'react';
import '../../../../style/RegistrationForm.css';
import { editFaculty, getFacultyById } from '../../../../Services/faculty_api';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FacultyEdit = () => {

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

    const [faculty, setFaculty] = useState({
        name: "",
        email: "",
    });

    const { name, email } = faculty;

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
        await editFaculty(faculty, id);


        navigate("/facultyEditView");
    };

    const loadUser = async () => {
        const result = await getFacultyById(id);
        setFaculty(result.data);
    };

    

    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/facultyEditView`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Faculty Edit Form</div>
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
};

export default FacultyEdit;
