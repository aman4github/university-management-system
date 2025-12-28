import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance4th } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BcaAttendance4th(props) {
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
                            <th>FLASK</th>
                            <th>DJANGO</th>
                            <th>WEBDEV</th>
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
                                        <td>{student.flask}</td>
                                        <td>{student.django}</td>
                                        <td>{student.webdev}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BcaflaskAttendancePresented/${student.id}/${student.flask}`}>
                                                    <button type="button" class="btn btn-success btnAction">FLASK</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcadjangoAttendancePresented/${student.id}/${student.django}`}>
                                                    <button type="button" class="btn btn-success btnAction">DJANGO</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcawebdevAttendancePresented/${student.id}/${student.webdev}`}>
                                                    <button type="button" class="btn btn-success btnAction">WEBDEV</button>
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
