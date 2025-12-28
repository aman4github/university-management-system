import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance2nd } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BbaAttendance2nd(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamAttendance2nd(props.stream);
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
                            <th>MANAGEMENT</th>
                            <th>SALES</th>
                            <th>RETAIL MANAGEMENT</th>
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
                                        <td>{student.management}</td>
                                        <td>{student.sales}</td>
                                        <td>{student.retailmanagement}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BbamanagementAttendancePresented/${student.id}/${student.management}`}>
                                                    <button type="button" class="btn btn-success btnAction">MANAGEMENT</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BbasalesAttendancePresented/${student.id}/${student.sales}`}>
                                                    <button type="button" class="btn btn-success btnAction">SALES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BbaretailmanagementAttendancePresented/${student.id}/${student.retailmanagement}`}>
                                                    <button type="button" class="btn btn-success btnAction">RETAIL MANAGEMENT</button>
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
