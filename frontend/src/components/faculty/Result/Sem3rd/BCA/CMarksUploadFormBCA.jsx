import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload3rdSemBcacResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CMarksUploadFormBCA() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        c: "",
    });

    const { c } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload3rdSemBcacResult(result, id);
        Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBCA3rd");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBCA3rd`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit C Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">3rd Sem Marks</span>
                                <input
                                    type="text"
                                    name="c"
                                    placeholder="Enter Marks"
                                    value={c}
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

