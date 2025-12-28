import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload2ndSemBhmcustomerserviceResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CustomerserviceMarksUploadFormBHM() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        customerservice: "",
    });

    const { customerservice } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload2ndSemBhmcustomerserviceResult(result, id);
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

                <div className="title">Submit Customer Service Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">2nd Sem Marks</span>
                                <input
                                    type="text"
                                    name="customerservice"
                                    placeholder="Enter Marks"
                                    value={customerservice}
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

