import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getAllStudentByStreamApproved4thSem } from '../../../../../Services/student_api'
import { Link } from 'react-router-dom';

export default function AllStudentsViewBCA4th(props) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getAllStudentByStreamApproved4thSem(props.stream);
        setStudents(studentResult.data);
        console.log(studentResult.data);
    }

    return (
        <>
            <div className="outer-table">
                <Link to={`/SemesterPanelPass`}>
                    <button type="button" className="btn btn-danger">Back</button>
                </Link>

                <table >

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>REG_DATE</th>
                            <th>NAME</th>
                            <th>PHONE NUMBER</th>
                            <th>EMAIL</th>
                            <th>STREAM</th>
                            <th>SEM</th>
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
                                        <td>{student.phno}</td>
                                        <td>{student.email}</td>
                                        <td>{student.stream}</td>
                                        <td>{student.sem}</td>
                                        <td>{student.pass}</td>
                                        <td>{student.status}</td>
                                        <td>
                                            <Link to={`/studentChangePassBCAForm4th/${student.id}`}>
                                                <button type="button" class="btn btn-danger btnAction">Change Password</button>
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
