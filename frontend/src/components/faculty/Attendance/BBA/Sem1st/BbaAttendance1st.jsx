import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance1st } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BbaAttendance1st(props) {
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
                            <th>Statistics</th>
                            <th>Maths</th>
                            <th>Accounts</th>
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
                                        <td>{student.statistics}</td>
                                        <td>{student.maths}</td>
                                        <td>{student.accounts}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/bbaStatisticsAttendancePresented/${student.id}/${student.statistics}`}>
                                                    <button type="button" class="btn btn-success btnAction">Statistics</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/bbaMathsAttendancePresented/${student.id}/${student.maths}`}>
                                                    <button type="button" class="btn btn-success btnAction">Maths</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/bbaAccountsAttendancePresented/${student.id}/${student.accounts}`}>
                                                    <button type="button" class="btn btn-success btnAction">Accounts</button>
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
