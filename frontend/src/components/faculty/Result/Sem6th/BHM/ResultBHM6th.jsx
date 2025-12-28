import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult6th } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBHM6th(props) {
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
                            <th>HUMAN RESOURCES</th>
                            <th>HOTEL LAW</th>
                            <th>INTERNATIONAL BANKING</th>
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
                                        <td>{student.humanresources}<hr/>100</td>
                                        <td>{student.hotellaw}<hr/>100</td>
                                        <td>{student.internationalbaking}<hr/>100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/HumanresourcesMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">HUMAN RESOURCES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/HotellawMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">HOTEL LAW</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/InternationalbakingMarksUploadFormBHM/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">INTERNATIONAL BAKING</button>
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
