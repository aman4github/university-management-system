import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  addAttandanceBbamacroeconomics } from '../../../../../Services/attendance_api'
import '../../../../../style/login.css'
import Swal from "sweetalert2";

export default function BbamacroeconomicsAttendancePresented() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    let navigate = useNavigate();

    const { id, macroeconomics } = useParams();
    
    const [attendance, setAttendance] = useState({
        macroeconomics: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        await addAttandanceBbamacroeconomics(attendance, id);Swal.fire({
            title: 'Success...',
            text: 'Attendance Updated For Student Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/bbaAttendance3rd");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => setAttendance({ macroeconomics: parseInt(macroeconomics) + 1 })}>
                            Yes
                        </button>
                        <Link to="/bbaAttendance3rd">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
