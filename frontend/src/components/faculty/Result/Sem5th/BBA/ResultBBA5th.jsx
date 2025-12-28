import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult5th } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBBA5th(props) {
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
                            <th>BUSINESS-MATH</th>
                            <th>COMPUTING</th>
                            <th>LANGUAGE-LAB</th>
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
                                        <td>{student.businessmath}<hr />100</td>
                                        <td>{student.computing}<hr />100</td>
                                        <td>{student.languagelab}<hr />100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/BusinessmathMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">BUSINESS-MATH</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/ComputingMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">COMPUTING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/LanguagelabMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">LANGUAGE-LAB</button>
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
