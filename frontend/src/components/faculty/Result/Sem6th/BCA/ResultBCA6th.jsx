import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult6th } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBCA6th(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getStudentByStreamResult6th(props.stream);

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
                            <th>APTITUDE</th>
                            <th>MULTIMEDIA</th>
                            <th>DESIGNING</th>
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
                                        <td>{student.aptitude}<hr/>100</td>
                                        <td>{student.multimedia}<hr/>100</td>
                                        <td>{student.designing}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/AptitudeMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">APTITUDE</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/MultimediaMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">MULTIMEDIA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/DesigningMarksUploadFormBCA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">DESIGNING</button>
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
