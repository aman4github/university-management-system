import React, { useEffect, useState } from 'react';
import '../../../../style/RegistrationForm.css'
import { addNotice } from '../../../../Services/notice_api';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function BcaNoticeUpload() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])

    let navigate = useNavigate();

    const defaultTimestamp = new Date().toISOString();

    const [newNotice, setNewNotice] = useState({
        notice: "",
        stream: "BCA",
        notice_date: defaultTimestamp,
    });

    const { notice } = newNotice;

    const onInputChange = (e) => {
        setNewNotice({ ...newNotice, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await addNotice(newNotice);
        Swal.fire({
            title: 'Success...',
            text: 'Notice Uploaded Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        // setTimeout(() => {
        //     window.location.href = "http://localhost:3000/adminPanel";
        // }, 2000);
        navigate("/adminPanel");
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/adminPanel`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title">BCA Notice</div>
                <div className="content">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">New Notice</span>
                                <textarea style={{resize: "auto", padding: "5px"}}
                                    rows="4"
                                    cols="73"
                                    name="notice"
                                    placeholder="Enter your Notice"
                                    value={notice}
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
