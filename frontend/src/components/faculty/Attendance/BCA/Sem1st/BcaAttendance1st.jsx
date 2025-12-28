import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance1st } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BcaAttendance1st(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamAttendance1st(props.stream);

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
                            <th>OPERATING SYSTEM</th>
                            <th>DSA</th>
                            <th>OOPS</th>
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
                                        <td>{student.operatingsystem}</td>
                                        <td>{student.dsa}</td>
                                        <td>{student.oops}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/bcaOSAttendancePresented/${student.id}/${student.operatingsystem}`}>
                                                    <button type="button" class="btn btn-success btnAction">OPERATING SYSTEM</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/bcaDSAAttendancePresented/${student.id}/${student.dsa}`}>
                                                    <button type="button" class="btn btn-success btnAction">DSA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/bcaOOPSAttendancePresented/${student.id}/${student.oops}`}>
                                                    <button type="button" class="btn btn-success btnAction">OOPS</button>
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
