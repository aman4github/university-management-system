import React, { useEffect, useState } from 'react';
import '../../../../../style/RegistrationForm.css'
import { upload2ndSemBcaDbmsResult } from '../../../../../Services/result_api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DbmsMarksUploadFormBCA() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    const { id } = useParams();

    let navigate = useNavigate();

    const [result, setResult] = useState({
        dbms: "",
    });

    const { dbms } = result;

    const onInputChange = (e) => {
        setResult({ ...result, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await upload2ndSemBcaDbmsResult(result, id);
        Swal.fire({
            title: 'Success...',
            text: 'Marks Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/resultBCA2nd");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/resultBCA2nd`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">Submit DBMS Marks</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">2nd Sem Marks</span>
                                <input
                                    type="text"
                                    name="dbms"
                                    placeholder="Enter Marks"
                                    value={dbms}
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

