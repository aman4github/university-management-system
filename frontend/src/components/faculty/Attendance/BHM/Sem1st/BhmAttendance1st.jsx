import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamAttendance1st } from '../../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function BhmAttendance1st(props) {
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
                            <th>Kitchen Services</th>
                            <th>Food Preparation</th>
                            <th>Catering Sciences</th>
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
                                        <td>{student.kitchenservices}</td>
                                        <td>{student.foodpreparation}</td>
                                        <td>{student.cateringsciences}</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/bhmKitchenservicesAttendancePresented/${student.id}/${student.kitchenservices}`}>
                                                    <button type="button" class="btn btn-success btnAction">Kitchen Services</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/bhmFoodpreparationAttendancePresented/${student.id}/${student.foodpreparation}`}>
                                                    <button type="button" class="btn btn-success btnAction">Food Preparation</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/bhmCateringsciencesAttendancePresented/${student.id}/${student.cateringsciences}`}>
                                                    <button type="button" class="btn btn-success btnAction">Catering Sciences</button>
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
