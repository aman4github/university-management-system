import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult4th } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBBA4th(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamResult4th(props.stream);

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
                            <th>CALCULUS</th>
                            <th>PRODUCT-MANAGEMENT</th>
                            <th>COMMUNICATION</th>
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
                                        <td>{student.calculus}<hr />100</td>
                                        <td>{student.productmanagement}<hr />100</td>
                                        <td>{student.communication}<hr />100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/CalculusMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">CALCULUS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/ProductmanagementMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">PRODUCT-MANAGEMENT</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/CommunicationMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">COMMUNICATION</button>
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
