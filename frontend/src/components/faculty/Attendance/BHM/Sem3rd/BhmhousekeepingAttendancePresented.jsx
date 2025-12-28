import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addAttandanceBhmhousekeeping } from '../../../../../Services/attendance_api'
import '../../../../../style/login.css'
import Swal from "sweetalert2";

export default function BhmhousekeepingAttendancePresented() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    let navigate = useNavigate();

    const { id, housekeeping } = useParams();
    const [attendance, setAttendance] = useState({
        housekeeping: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        await addAttandanceBhmhousekeeping(attendance, id);
        Swal.fire({
            title: 'Success...',
            text: 'Attendance Updated For Student Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/bhmAttendance3rd");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => setAttendance({ housekeeping: parseInt(housekeeping) + 1 })}>
                            Yes
                        </button>
                        <Link to="/bhmAttendance3rd">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
