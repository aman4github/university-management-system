import React, { useState } from 'react';
import '../style/RegistrationForm.css';
import { addStudent } from '../Services/student_api';
import { Link, useNavigate } from 'react-router-dom';
// import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const RegistrationForm = () => {

    function randomPass() {
        return Math.floor(Math.random() * (9999 - 1000) + 1000);
    }

    const randomPassword = randomPass();

    function randomID() {
        return Math.floor(Math.random() * (999999 - 100000) + 100000);
    }

    const randomid = randomID();

    let navigate = useNavigate();
    // console.log(randomid);

    const defaultTimestamp = new Date().toISOString();

    const initialValues = {
        id: randomid,
        name: '',
        fathersName: '',
        email: '',
        phno: '',
        stream: '',
        address: '',
        sem: '1ST',
        status: 'PENDING',
        marksheet: null,
        reg_date: defaultTimestamp,
        pass: randomPassword,
    };

    const [formData, setFormData] = useState({
        ...initialValues,
        emailError: false,
        phnoError: false,
        formSubmitted: false,
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatephno = (phno) => {
        return phno.trim().length === 10 && !isNaN(phno);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
            emailError: name === 'email' ? !validateEmail(value) : formData.emailError,
            phnoError: name === 'phno' ? !validatephno(value) : formData.phnoError,
        }));
    };

    const handleSubmit = async (e) => {
        // Swal.fire({
        //     title: 'Success!',
        //     text: 'Your form has been submitted.',
        //     icon: 'success',
        //     confirmButtonText: 'OK'
        // })

        e.preventDefault();
        const isEmailValid = validateEmail(formData.email);
        const isphnoValid = validatephno(formData.phno);

        setFormData((prevState) => ({
            ...prevState,
            emailError: !isEmailValid,
            phnoError: !isphnoValid,
        }));

        if (isEmailValid && isphnoValid) {
            await addStudent(formData);
            setFormData({ ...initialValues, formSubmitted: true });
            navigate("/");
        }
    };

    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Student Registration</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Father's Name</span>
                                <input
                                    type="text"
                                    name="fathersName"
                                    placeholder="Enter your father's name"
                                    value={formData.fathersName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                {formData.emailError && (
                                    <div className="error">Please enter a valid email address.</div>
                                )}
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input
                                    type="text"
                                    name="phno"
                                    placeholder="Enter your number"
                                    value={formData.phno}
                                    onChange={handleInputChange}
                                    required
                                />
                                {formData.phnoError && (
                                    <div className="error">Please enter a valid 10-digit phone number.</div>
                                )}
                            </div>
                            <div className="input-box">
                                <span className="details">Stream</span>
                                <input
                                    type="text"
                                    name="stream"
                                    placeholder="Enter your stream"
                                    value={formData.stream}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Address</span>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter your address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-box">
                            <span className="details">Upload Marksheet</span>
                            <input
                                type="file"
                                name="marksheet"
                                onChange={(e) =>
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        marksheet: e.target.files[0],
                                    }))
                                }
                                required
                            />
                        </div>
                        <div className="button">
                            <input type="submit" value="Register Now" />
                            {formData.formSubmitted && (
                                <div className="success">Form submitted successfully!</div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
