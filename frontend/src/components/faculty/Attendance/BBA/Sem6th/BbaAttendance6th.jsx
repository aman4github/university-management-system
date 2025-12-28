import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance6th } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BbaAttendance6th(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamAttendance6th(props.stream);
        setStudents(studentResult.data);
        console.log(studentResult.data);
    }

    return (
        <>
            <div className="outer-table">
                <Link to={`/SemesterPanelAttendance`}>
                    <button type="button" className="btn btn-danger">Back</button>
                </Link>

                <table >

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>SEM</th>
                            <th>SOFTWARE LAB</th>
                            <th>BUSINESS ACCOUNTING</th>
                            <th>BUSINESS LAW</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.sem}</td>
                                        <td>{student.softwarelab}</td>
                                        <td>{student.businessaccounting}</td>
                                        <td>{student.businesslaw}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BbasoftwarelabAttendancePresented/${student.id}/${student.softwarelab}`}>
                                                    <button type="button" class="btn btn-success btnAction">SOFTWARE LAB</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BbabusinessaccountingAttendancePresented/${student.id}/${student.businessaccounting}`}>
                                                    <button type="button" class="btn btn-success btnAction">BUSINESS ACCOUNTING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BbabusinesslawAttendancePresented/${student.id}/${student.businesslaw}`}>
                                                    <button type="button" class="btn btn-success btnAction">BUSINESS LAW</button>
                                                </Link>
                                            </div>
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
