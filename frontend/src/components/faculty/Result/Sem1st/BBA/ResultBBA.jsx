import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult1st } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBCA(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamResult1st(props.stream);

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
                            <th>STATISTICS</th>
                            <th>MATHS</th>
                            <th>ACCOUNTS</th>
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
                                        <td>{student.statistics}<hr/>100</td>
                                        <td>{student.maths}<hr/>100</td>
                                        <td>{student.accounts}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/statistics1stSemMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">STATISTICS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/maths1stSemMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">MATHS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/accounts1stSemMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">ACCOUNTS</button>
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
