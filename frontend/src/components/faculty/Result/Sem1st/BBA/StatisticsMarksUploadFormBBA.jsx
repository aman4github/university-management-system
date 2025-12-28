import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload1stSemBbaStatisticsResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function StatisticsMarksUploadFormBBA() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        statistics: "",
    });

    const { statistics } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload1stSemBbaStatisticsResult(result, id);
        Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBBA1st");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBBA1st`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit Statistics Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">1st Sem Marks</span>
                                <input
                                    type="text"
                                    name="statistics"
                                    placeholder="Enter Marks"
                                    value={statistics}
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

