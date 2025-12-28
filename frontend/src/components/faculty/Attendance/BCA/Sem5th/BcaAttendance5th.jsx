import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance5th } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BcaAttendance5th(props) {
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
                            <th>MERN</th>
                            <th>MEAN</th>
                            <th>MYSQL</th>
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
                                        <td>{student.mern}</td>
                                        <td>{student.mean}</td>
                                        <td>{student.mysql}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BcamernAttendancePresented/${student.id}/${student.mern}`}>
                                                    <button type="button" class="btn btn-success btnAction">MERN</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcameanAttendancePresented/${student.id}/${student.mean}`}>
                                                    <button type="button" class="btn btn-success btnAction">MEAN</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcamysqlAttendancePresented/${student.id}/${student.mysql}`}>
                                                    <button type="button" class="btn btn-success btnAction">MYSQL</button>
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
