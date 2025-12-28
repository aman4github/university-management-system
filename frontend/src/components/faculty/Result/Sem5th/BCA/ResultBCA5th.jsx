import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult5th } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBCA5th(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamResult5th(props.stream);

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
                            <th>MERN</th>
                            <th>MEAN</th>
                            <th>MYSQL</th>
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
                                        <td>{student.mern}<hr/>100</td>
                                        <td>{student.mean}<hr/>100</td>
                                        <td>{student.mysql}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/MernMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">MERN</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/MeanMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">MEAN</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/MysqlMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">MYSQL</button>
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
