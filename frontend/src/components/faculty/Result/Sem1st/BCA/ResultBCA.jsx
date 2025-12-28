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
                            <th>OPERATING SYSTEM</th>
                            <th>DSA</th>
                            <th>OOPS</th>
                            <th>SUBMIT MARKS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>1ST</td>
                                        <td>{student.operatingsystem}<hr/>100</td>
                                        <td>{student.dsa}<hr/>100</td>
                                        <td>{student.oops}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/os1stSemMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">OPERATING SYSTEM</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/dsa1stSemMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">DSA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/oops1stSemMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">OOPS</button>
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
