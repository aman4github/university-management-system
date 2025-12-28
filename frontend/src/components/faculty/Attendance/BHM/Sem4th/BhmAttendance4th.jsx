import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance4th } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BhmAttendance4th(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamAttendance4th(props.stream);
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
                            <th>HR MANAGEMENT</th>
                            <th>PUBLIC RELATIONS</th>
                            <th>FOOD SCIENCE</th>
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
                                        <td>{student.hrmanagement}</td>
                                        <td>{student.publicrelations}</td>
                                        <td>{student.foodscience}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BhmhrmanagementAttendancePresented/${student.id}/${student.hrmanagement}`}>
                                                    <button type="button" class="btn btn-success btnAction">HR MANAGEMENT</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BhmpublicrelationsAttendancePresented/${student.id}/${student.publicrelations}`}>
                                                    <button type="button" class="btn btn-success btnAction">PUBLIC RELATIONS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BhmfoodscienceAttendancePresented/${student.id}/${student.foodscience}`}>
                                                    <button type="button" class="btn btn-success btnAction">FOOD SCIENCE</button>
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
