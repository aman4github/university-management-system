import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance3rd } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BbaAttendance3rd(props) {
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
                            <th>MACRO ECONOMICS</th>
                            <th>FINANCIAL ACCOUNTING</th>
                            <th>CONSUMER BEHAVIOUR</th>
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
                                        <td>{student.macroeconomics}</td>
                                        <td>{student.financialaccounting}</td>
                                        <td>{student.consumerbehaviour}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BbamacroeconomicsAttendancePresented/${student.id}/${student.macroeconomics}`}>
                                                    <button type="button" class="btn btn-success btnAction">MACRO ECONOMICS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BbafinancialaccountingAttendancePresented/${student.id}/${student.financialaccounting}`}>
                                                    <button type="button" class="btn btn-success btnAction">FINANCIAL ACCOUNTING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BbaconsumerbehaviourAttendancePresented/${student.id}/${student.consumerbehaviour}`}>
                                                    <button type="button" class="btn btn-success btnAction">CONSUMER BEHAVIOUR</button>
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
