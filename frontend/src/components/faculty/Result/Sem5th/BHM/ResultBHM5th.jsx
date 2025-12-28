import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult5th } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBHM5th(props) {
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
                            <th>SOFTSKILLS</th>
                            <th>NUTRITION</th>
                            <th>FOOD SAFETY</th>
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
                                        <td>{student.softskills}<hr/>100</td>
                                        <td>{student.nutrition}<hr/>100</td>
                                        <td>{student.foodsafety}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/SoftskillsMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">SOFTSKILLS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/NutritionMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">NUTRITION</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/FoodsafetyMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">FOOD SAFETY</button>
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
