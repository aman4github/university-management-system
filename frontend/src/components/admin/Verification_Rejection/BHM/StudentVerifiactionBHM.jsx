import React, { useEffect, useState } from 'react'
import '../../../../style/studentVerification.css'
// new
import { getAllStudentByStreamNotApproved } from '../../../../Services/student_api'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function StudentVerifiactionBHM(props) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getAllStudentByStreamNotApproved(props.stream);
        setStudents(studentResult.data);
        console.log(studentResult.data);
    }

    return (
        <>
            <div className="outer-table">
                <Link to={`/adminPanel`}>
                    <button type="button" className="btn btn-danger">Back</button>
                </Link>

                <table >

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>REG_DATE</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE NO</th>
                            <th>STREAM</th>
                            <th>PASSWORD</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.reg_date}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phno}</td>
                                        <td>{student.stream}</td>
                                        <td>{student.pass}</td>
                                        <td>{student.status}</td>
                                        <td>
                                            <Link to={`/editStudentApprovedBHM/${student.id}/${student.email}`}>
                                                <button type="button" class="btn btn-success btnAction">Approve</button>
                                            </Link>
                                            <Link to={`/editStudentRejectedBHM/${student.id}/${student.email}`}>
                                                <button type="button" class="btn btn-danger btnAction">Reject</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
