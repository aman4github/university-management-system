import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance5th } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BhmAttendance5th(props) {
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
                            <th>SOFT SKILLS</th>
                            <th>NUTRITION</th>
                            <th>FOOD SAFETY</th>
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
                                        <td>{student.softskills}</td>
                                        <td>{student.nutrition}</td>
                                        <td>{student.foodsafety}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BhmsoftskillsAttendancePresented/${student.id}/${student.softskills}`}>
                                                    <button type="button" class="btn btn-success btnAction">SOFT SKILLS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BhmnutritionAttendancePresented/${student.id}/${student.nutrition}`}>
                                                    <button type="button" class="btn btn-success btnAction">NUTRITION</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/BhmfoodsafetyAttendancePresented/${student.id}/${student.foodsafety}`}>
                                                    <button type="button" class="btn btn-success btnAction">FOOD SAFETY</button>
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
