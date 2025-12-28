import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editStudent } from '../../../../Services/student_api'
import '../../../../style/login.css'
import Swal from "sweetalert2";

export default function RejectionVerifyStudentBCA() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    let navigate = useNavigate();

    const { id,email } = useParams();

    const [student, setStudent] = useState({
        status: "",
    });

    const sendmailForReject = (email) => {
        const showLoading = () => {
            Swal.fire({
                text: 'Please Wait We are Sending Details to the Student...Do not Refresh or Back the Page',
                icon: 'success',
                showConfirmButton: false,
                allowOutsideClick: false,
                willOpen: () => {
                    Swal.showLoading();
                }
            })
        }
        showLoading();
        fetch('http://127.0.0.1:8081/sendmailForReject?mailid=' + email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }).then(response => {

            if (response.ok) {
                // alert("Mail sent for reject")
                Swal.fire({
                    title: 'Success!',
                    text: 'Mail Sent',
                    icon: 'success',
                    allowOutsideClick: false,
                    confirmButtonText: 'OK'
                })
            }
            else {
                // alert("Mail does not exist")
                Swal.fire({
                    title: 'Error!',
                    text: 'Mail does not exist',
                    icon: 'error',
                    allowOutsideClick: false,
                    confirmButtonText: 'OK'
                })
            }
        }).catch(console.error())
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await editStudent(student, id);
        navigate("/studentVerificationBCA");
    };


    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => {setStudent({ status: "REJECTED" });sendmailForReject(email)}}>
                            Yes
                        </button>
                        <Link to="/studentVerificationBCA">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
