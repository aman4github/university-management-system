import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editStudentSem } from '../../../../../Services/student_api'
import { editStudentSemAttendance } from '../../../../../Services/attendance_api'
import { addStudent3rdSem, editStudentSemResult2nd } from '../../../../../Services/result_api'
import '../../../../../style/login.css'
import Swal from "sweetalert2";

export default function PromotedBba2ndsemApproval() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    let navigate = useNavigate();

    const { id } = useParams();


    const [student, setStudent] = useState({
        sem: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        await editStudentSem(student, id);
        await editStudentSemAttendance({sem: "3RD"}, id);
        await editStudentSemResult2nd({sem: "PROMOTED"}, id);
        await addStudent3rdSem({id: id, stream: "BBA", sem: "3RD"});
        Swal.fire({
            title: 'Success...',
            text: 'Promoted to 3rd Semester Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        // setTimeout(() => {
        //     window.location.href = "http://localhost:3000/promoteBba2ndSem";
        // }, 2000);
        navigate("/promoteBba2ndSem");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => setStudent({ sem: "3RD" })}>
                            Yes
                        </button>
                        <Link to="/promoteBba2ndSem">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
