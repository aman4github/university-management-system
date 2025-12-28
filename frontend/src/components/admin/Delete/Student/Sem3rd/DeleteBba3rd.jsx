import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteStudent } from '../../../../../Services/student_api'
import '../../../../../style/login.css'
import Swal from "sweetalert2";

export default function DeleteBba3rd() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    let navigate = useNavigate();

    const { id } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();
        await deleteStudent(id);
        Swal.fire({
            title: 'Success...',
            text: 'Student Deleted Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        // setTimeout(() => {
        //     window.location.href = "http://localhost:3000/adminallStudentDeleteBBA3rd";
        // }, 2000);
        navigate("/adminallStudentDeleteBBA3rd");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={(e) => onSubmit(e)}>
                            Yes
                        </button>
                        <Link to="/adminallStudentDeleteBBA3rd">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
