import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editStudent } from '../../../../Services/student_api'
import { addStudentAttandance } from '../../../../Services/attendance_api'
import { addStudent1stSem } from '../../../../Services/result_api'
import '../../../../style/login.css'
import Swal from "sweetalert2";

export default function ConfirmationVerifyStudentbca() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    let navigate = useNavigate();

    const { id, email } = useParams();

    const [student, setStudent] = useState({
        status: "",
    });

    const sendMail = (email) => {
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
        fetch('http://127.0.0.1:8081/sendmail?mailid=' + email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }).then(response => {

            if (response.ok) {
                // alert("Mail sent")
                Swal.fire({
                    title: 'Success!',
                    text: 'Mail Sent',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                })
            }
            else {
                // alert("Mail does not exist")
                Swal.fire({
                    title: 'Error!',
                    text: 'Mail does not exist',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                })
            }
        }).catch(console.error())
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await editStudent(student, id);
        await addStudentAttandance({
            id: id, stream: "BBA", sem: "1ST",
            statistics: "0", maths: "0", accounts: "0",
            management: "0", sales: "0", retailmanagement: "0",
            macroeconomics: "0", financialaccounting: "0", consumerbehaviour: "0",
            calculus: "0", productmanagement: "0", communication: "0",
            businessmath: "0", computing: "0", languagelab: "0",
            softwarelab: "0", businessaccounting: "0", businesslaw: "0",
        });
        await addStudent1stSem({ id: id, stream: "BBA", sem: "1ST" });
        navigate("/studentVerificationBBA");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => {setStudent({ status: "APPROVED" });sendMail(email)}}>
                            Yes
                        </button>
                        <Link to="/studentVerificationBBA">
                            <button className="noConfirm" type="submit">No</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
