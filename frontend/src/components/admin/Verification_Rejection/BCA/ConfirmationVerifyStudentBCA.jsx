import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editStudent } from '../../../../Services/student_api'
import { addStudentAttandance } from '../../../../Services/attendance_api'
import { addStudent1stSem } from '../../../../Services/result_api'
import '../../../../style/login.css'
import Swal from 'sweetalert2';

export default function ConfirmationVerifyStudentbca() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    let navigate = useNavigate();

    const { id, email } = useParams();

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


    const [student, setStudent] = useState({
        status: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        await editStudent(student, id);
        await addStudentAttandance({
            id: id, stream: "BCA", sem: "1ST",
            operatingsystem: "0", dsa: "0", oops: "0",
            dbms: "0", python: "0", networking: "0",
            it: "0", java: "0", c: "0",
            flask: "0", django: "0", webdev: "0",
            mern: "0", mean: "0", mysql: "0",
            aptitude: "0", multimedia: "0", designing: "0",
        });
        await addStudent1stSem({ id: id, stream: "BCA", sem: "1ST" });
        navigate("/studentVerificationBCA");
    }

    return (
        <div className="outerWrapper" style={{ margin: "0" }}>
            <div className="wrapper">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2 style={{ color: "white" }}>Confirmation</h2>
                    <h5 style={{ color: "white", marginBottom: "20px" }}>Are You Sure ?</h5>
                    <div className="buttonsConfirmation">
                        <button type="submit" className="yesConfirm" onClick={() => { setStudent({ status: "APPROVED" }); sendMail(email) }}>
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
