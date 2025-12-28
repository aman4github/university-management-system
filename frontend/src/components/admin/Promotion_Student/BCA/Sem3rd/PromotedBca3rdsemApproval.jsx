import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editStudentSem } from '../../../../../Services/student_api'
import { editStudentSemAttendance } from '../../../../../Services/attendance_api'
import { addStudent4thSem, editStudentSemResult3rd } from '../../../../../Services/result_api'
import '../../../../../style/login.css'
import Swal from "sweetalert2";

export default function PromotedBca3rdsemApproval() {
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
        await editStudentSemAttendance({sem: "4TH"}, id);
        await editStudentSemResult3rd({sem: "PROMOTED"}, id);
        await addStudent4thSem({id: id, stream: "BCA", sem: "4TH"});
        Swal.fire({
            title: 'Success...',
            text: 'Promoted to 4th Semester Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        // setTimeout(() => {
        //     window.location.href = "http://localhost:3000/promoteBca3rdSem";
        // }, 2000);
        navigate("/promoteBca3rdSem");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => setStudent({ sem: "4TH" })}>
                            Yes
                        </button>
                        <Link to="/promoteBca3rdSem">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
