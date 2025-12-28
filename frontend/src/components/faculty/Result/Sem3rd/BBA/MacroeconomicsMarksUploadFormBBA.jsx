import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload3rdSemBbamacroeconomicsResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function MacroeconomicsMarksUploadFormBBA() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        macroeconomics: "",
    });

    const { macroeconomics } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload3rdSemBbamacroeconomicsResult(result, id);
        Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBBA3rd");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBBA3rd`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit Macro-Economics Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">3rd Sem Marks</span>
                                <input
                                    type="text"
                                    name="macroeconomics"
                                    placeholder="Enter Marks"
                                    value={macroeconomics}
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

