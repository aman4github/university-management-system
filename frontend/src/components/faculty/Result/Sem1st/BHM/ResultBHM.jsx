import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult1st } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBHM(props) {
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
                            <th>KITCHEN SERVICES</th>
                            <th>FOOD PREPARATION</th>
                            <th>CATERING SCIENCES</th>
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
                                        <td>{student.kitchenservices}<hr/>100</td>
                                        <td>{student.foodpreparation}<hr/>100</td>
                                        <td>{student.cateringsciences}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/KITCHENSERVICES1stSemMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">KITCHEN SERVICES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/FOODPREPARATION1stSemMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">FOOD PREPARATION</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/CATERINGSCIENCES1stSemMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">CATERING SCIENCES</button>
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
