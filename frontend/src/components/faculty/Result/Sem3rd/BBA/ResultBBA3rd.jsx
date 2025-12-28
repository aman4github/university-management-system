import React, { useEffect, useState } from 'react'
import '../../../../../style/studentVerification.css'
import { getStudentByStreamResult3rd } from '../../../../../Services/result_api'
import { Link } from 'react-router-dom';

export default function ResultBBA3rd(props) {
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
                            <th>MACRO-ECONOMICS</th>
                            <th>FINANCIAL-ACCOUNTING</th>
                            <th>CONSUMER-BEHAVIOUR</th>
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
                                        <td>{student.macroeconomics}<hr />100</td>
                                        <td>{student.financialaccounting}<hr />100</td>
                                        <td>{student.consumerbehaviour}<hr />100</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/MacroeconomicsMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">MACRO-ECONOMICS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/FinancialaccountingMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">FINANCIAL-ACCOUNTING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/ConsumerbehaviourMarksUploadFormBBA/${student.id}`}>
                                                    <button type="button" class="btn btn-success btnAction">CONSUMER-BEHAVIOUR</button>
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
