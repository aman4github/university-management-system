import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult2nd } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBCA2nd(props) {
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
                            <th>DBMS</th>
                            <th>PYTHON</th>
                            <th>NETWORKING</th>
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
                                        <td>{student.dbms}<hr/>100</td>
                                        <td>{student.python}<hr/>100</td>
                                        <td>{student.networking}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/dbms2ndSemMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">DBMS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/python2ndSemMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">PYTHON</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/networking2ndSemMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">NETWORKING</button>
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
