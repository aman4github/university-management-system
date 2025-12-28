import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance5th } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BbaAttendance5th(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamAttendance5th(props.stream);
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
                            <th>BUSINESS MATH</th>
                            <th>COMPUTING</th>
                            <th>LANGUAGE LAB</th>
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
                                        <td>{student.businessmath}</td>
                                        <td>{student.computing}</td>
                                        <td>{student.languagelab}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BbabusinessmathAttendancePresented/${student.id}/${student.businessmath}`}>
                                                    <button type="button" class="btn btn-success btnAction">BUSINESS MATH</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BbacomputingAttendancePresented/${student.id}/${student.computing}`}>
                                                    <button type="button" class="btn btn-success btnAction">COMPUTING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BbalanguagelabAttendancePresented/${student.id}/${student.languagelab}`}>
                                                    <button type="button" class="btn btn-success btnAction">LANGUAGE LAB</button>
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
