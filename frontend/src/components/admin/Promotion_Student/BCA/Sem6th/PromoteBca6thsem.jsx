import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getAllStudentByStreamApproved6thSem } from '../../../../../Services/student_api'
import { Link } from 'react-router-dom';

export default function PromoteBca6thsem(props) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getAllStudentByStreamApproved6thSem(props.stream);
        setStudents(studentResult.data);
        console.log(studentResult.data);
    }

    return (
        <>
            <div className="outer-table">
                <Link to={`/semesterPanelAdmin`}>
                    <button type="button" className="btn btn-danger">Back</button>
                </Link>
                
                <table >

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>REG_DATE</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE NO</th>
                            <th>STREAM</th>
                            <th>SEM</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.reg_date}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phno}</td>
                                        <td>{student.stream}</td>
                                        <td>{student.sem}</td>
                                        <td>{student.status}</td>
                                        <td>
                                            <Link to={`/promoteBca6thSemApproval/${student.id}`}>
                                                <button type="button" class="btn btn-success btnAction">Promoted</button>
                                            </Link>
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
