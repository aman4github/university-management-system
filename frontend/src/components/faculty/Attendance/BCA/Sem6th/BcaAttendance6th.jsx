import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance6th } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BcaAttendance6th(props) {
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
                            <th>APTITUDE</th>
                            <th>MULTIMEDIA</th>
                            <th>DESIGNING</th>
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
                                        <td>{student.aptitude}</td>
                                        <td>{student.multimedia}</td>
                                        <td>{student.designing}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BcaaptitudeAttendancePresented/${student.id}/${student.aptitude}`}>
                                                    <button type="button" class="btn btn-success btnAction">APTITUDE</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcamultimediaAttendancePresented/${student.id}/${student.multimedia}`}>
                                                    <button type="button" class="btn btn-success btnAction">MULTIMEDIA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcadesigningAttendancePresented/${student.id}/${student.designing}`}>
                                                    <button type="button" class="btn btn-success btnAction">DESIGNING</button>
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
