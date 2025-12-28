import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload2ndSemBhmOperationsResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function OperationsMarksUploadFormBHM() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        operations: "",
    });

    const { operations } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload2ndSemBhmOperationsResult(result, id);
        Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBHM2nd");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBHM2nd`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit Operations Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">2nd Sem Marks</span>
                                <input
                                    type="text"
                                    name="operations"
                                    placeholder="Enter Marks"
                                    value={operations}
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

