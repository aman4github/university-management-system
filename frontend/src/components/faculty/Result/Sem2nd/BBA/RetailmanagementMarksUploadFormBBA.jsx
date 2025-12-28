import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload2ndSemBbaRetailmanagementResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function RetailmanagementMarksUploadFormBBA() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        retailmanagement: "",
    });

    const { retailmanagement } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload2ndSemBbaRetailmanagementResult(result, id);
        Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBBA2nd");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBBA2nd`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit Retail Management Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">2nd Sem Marks</span>
                                <input
                                    type="text"
                                    name="retailmanagement"
                                    placeholder="Enter Marks"
                                    value={retailmanagement}
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

