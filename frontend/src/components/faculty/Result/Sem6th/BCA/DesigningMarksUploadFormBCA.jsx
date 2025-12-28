import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload6thSemBcadesigningResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DesigningMarksUploadFormBCA() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        designing: "",
    });

    const { designing } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload6thSemBcadesigningResult(result, id);Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBCA6th");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBCA6th`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit Designing Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">6th Sem Marks</span>
                                <input
                                    type="text"
                                    name="designing"
                                    placeholder="Enter Marks"
                                    value={designing}
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

