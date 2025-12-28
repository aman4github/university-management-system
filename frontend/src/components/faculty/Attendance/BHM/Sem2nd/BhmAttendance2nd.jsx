import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance2nd } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BhmAttendance2nd(props) {
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
                            <th>OPERATIONS</th>
                            <th>HOSPITALITY SERVICES</th>
                            <th>CUSTOMER SERVICE</th>
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
                                        <td>{student.operations}</td>
                                        <td>{student.hospitalityservices}</td>
                                        <td>{student.customerservice}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BhmoperationsAttendancePresented/${student.id}/${student.operations}`}>
                                                    <button type="button" class="btn btn-success btnAction">OPERATIONS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BhmhospitalityservicesAttendancePresented/${student.id}/${student.hospitalityservices}`}>
                                                    <button type="button" class="btn btn-success btnAction">HOSPITALITY SERVICES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BhmcustomerserviceAttendancePresented/${student.id}/${student.customerservice}`}>
                                                    <button type="button" class="btn btn-success btnAction">CUSTOMER SERVICE</button>
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
