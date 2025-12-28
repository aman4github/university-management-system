import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult4th } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBHM4th(props) {
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
                            <th>HR-MANAGEMENT</th>
                            <th>PUBLIC-RELATIONS</th>
                            <th>FOOD-SCIENCE</th>
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
                                        <td>{student.hrmanagement}<hr/>100</td>
                                        <td>{student.publicrelations}<hr/>100</td>
                                        <td>{student.foodscience}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/HrmanagementMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">HR-MANAGEMENT</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/PublicrelationsMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">PUBLIC-RELATIONS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/FoodscienceMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">FOOD-SCIENCE</button>
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
