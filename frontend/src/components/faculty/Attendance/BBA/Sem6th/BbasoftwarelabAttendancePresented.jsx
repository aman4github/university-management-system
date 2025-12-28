import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  addAttandanceBbasoftwarelab } from '../../../../../Services/attendance_api'
import '../../../../../style/login.css'
import Swal from "sweetalert2";

export default function BbasoftwarelabAttendancePresented() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    let navigate = useNavigate();

    const { id, softwarelab } = useParams();
    
    const [attendance, setAttendance] = useState({
        softwarelab: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        await addAttandanceBbasoftwarelab(attendance, id);
        Swal.fire({
            title: 'Success...',
            text: 'Attendance Updated For Student Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/bbaAttendance6th");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => setAttendance({ softwarelab: parseInt(softwarelab) + 1 })}>
                            Yes
                        </button>
                        <Link to="/bbaAttendance6th">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
