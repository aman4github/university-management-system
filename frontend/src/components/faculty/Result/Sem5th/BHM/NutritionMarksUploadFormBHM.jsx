import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload5thSemBhmnutritionResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function NutritionMarksUploadFormBHM() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        nutrition: "",
    });

    const { nutrition } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload5thSemBhmnutritionResult(result, id);
        Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBHM5th");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBHM5th`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit Nutrition Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">5th Sem Marks</span>
                                <input
                                    type="text"
                                    name="nutrition"
                                    placeholder="Enter Marks"
                                    value={nutrition}
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

