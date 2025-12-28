import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload5thSemBbabusinessmathResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function BusinessmathMarksUploadFormBBA() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        businessmath: "",
    });

    const { businessmath } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload5thSemBbabusinessmathResult(result, id);
        Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBBA5th");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBBA5th`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit BUSINESS-MATH Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">5th Sem Marks</span>
                                <input
                                    type="text"
                                    name="businessmath"
                                    placeholder="Enter Marks"
                                    value={businessmath}
                                    onChange={(e) => onInputChange(e)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Upload" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

