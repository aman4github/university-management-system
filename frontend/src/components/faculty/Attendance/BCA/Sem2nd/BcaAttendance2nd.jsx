import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance2nd } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BcaAttendance2nd(props) {
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
                            <th>DBMS</th>
                            <th>PYTHON</th>
                            <th>NETWORKING</th>
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
                                        <td>{student.dbms}</td>
                                        <td>{student.python}</td>
                                        <td>{student.networking}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BcadbmsAttendancePresented/${student.id}/${student.dbms}`}>
                                                    <button type="button" class="btn btn-success btnAction">DBMS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcapythonAttendancePresented/${student.id}/${student.python}`}>
                                                    <button type="button" class="btn btn-success btnAction">PYTHON</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BcanetworkingAttendancePresented/${student.id}/${student.networking}`}>
                                                    <button type="button" class="btn btn-success btnAction">NETWORKING</button>
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
