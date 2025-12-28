import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editStudentSem } from '../../../../../Services/student_api'
import { editStudentSemAttendance } from '../../../../../Services/attendance_api'
import { addStudent5thSem, editStudentSemResult4th } from '../../../../../Services/result_api'
import '../../../../../style/login.css'
import Swal from "sweetalert2";

export default function PromotedBca4thsemApproval() {
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
        await editStudentSemAttendance({sem: "5TH"}, id);
        await editStudentSemResult4th({sem: "PROMOTED"}, id);
        await addStudent5thSem({id: id, stream: "BCA", sem: "5TH"});
        Swal.fire({
            title: 'Success...',
            text: 'Promoted to 5th Semester Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        // setTimeout(() => {
        //     window.location.href = "http://localhost:3000/promoteBca4thSem";
        // }, 2000);
        navigate("/promoteBca4thSem");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => setStudent({ sem: "5TH" })}>
                            Yes
                        </button>
                        <Link to="/promoteBca4thSem">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
