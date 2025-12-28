import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance3rd } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BhmAttendance3rd(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamAttendance3rd(props.stream);
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
                            <th>LEADERSHIP SKILLS</th>
                            <th>HOUSEKEEPING</th>
                            <th>TOURISM MARKETING</th>
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
                                        <td>{student.leadershipskills}</td>
                                        <td>{student.housekeeping}</td>
                                        <td>{student.tourismmarketing}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BhmleadershipskillsAttendancePresented/${student.id}/${student.leadershipskills}`}>
                                                    <button type="button" class="btn btn-success btnAction">LEADERSHIP SKILLS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BhmhousekeepingAttendancePresented/${student.id}/${student.housekeeping}`}>
                                                    <button type="button" class="btn btn-success btnAction">HOUSEKEEPING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BhmtourismmarketingAttendancePresented/${student.id}/${student.tourismmarketing}`}>
                                                    <button type="button" class="btn btn-success btnAction">TOURISM MARKETING</button>
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
