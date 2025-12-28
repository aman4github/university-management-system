import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult3rd } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBCA3rd(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamResult3rd(props.stream);

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
                            <th>INOFRMATION TECHNOLOGY</th>
                            <th>JAVA</th>
                            <th>C LANGUAGE</th>
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
                                        <td>{student.it}<hr/>100</td>
                                        <td>{student.java}<hr/>100</td>
                                        <td>{student.c}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/ItMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">INOFRMATION TECHNOLOGY</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/JavaMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">JAVA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/CMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">C LANGUAGE</button>
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
