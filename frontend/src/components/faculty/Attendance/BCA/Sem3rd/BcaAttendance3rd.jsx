import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance3rd } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BcaAttendance3rd(props) {
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
                            <th>INOFRMATION TECHNOLOGY</th>
                            <th>JAVA</th>
                            <th>C LANGUAGE</th>
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
                                        <td>{student.it}</td>
                                        <td>{student.java}</td>
                                        <td>{student.c}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BcaitAttendancePresented/${student.id}/${student.it}`}>
                                                    <button type="button" class="btn btn-success btnAction">INOFRMATION TECHNOLOGY</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcajavaAttendancePresented/${student.id}/${student.java}`}>
                                                    <button type="button" class="btn btn-success btnAction">JAVA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcacAttendancePresented/${student.id}/${student.c}`}>
                                                    <button type="button" class="btn btn-success btnAction">C LANGUAGE</button>
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
