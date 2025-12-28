import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult2nd } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBHM2nd(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamResult2nd(props.stream);

        setStudents(studentResult.data);
        console.log(studentResult.data);
    }

    return (
        <>
            <div className="outer-table">
                <Link to={`/semesterPanelFaculty`}>
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
                            <th>SUBMIT MARKS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.sem}</td>
                                        <td>{student.operations}<hr/>100</td>
                                        <td>{student.hospitalityservices}<hr/>100</td>
                                        <td>{student.customerservice}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/OperationsMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">OPERATIONS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/HospitalityservicesMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">HOSPITALITY SERVICES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/CustomerserviceMarksUploadFormBHM/${student.id}`}>
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
