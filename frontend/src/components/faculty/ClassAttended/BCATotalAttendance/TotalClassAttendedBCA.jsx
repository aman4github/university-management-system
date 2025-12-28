import React, { useEffect, useState } from 'react'
import '../../../../style/studentVerification.css'
import { getTotalAttendanceByStream } from '../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function TotalClassAttendedBCA() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getTotalAttendanceByStream();

        setStudents(studentResult.data);
        console.log(studentResult.data);
    }

    return (
        <>
            <div className="outer-table">
                <Link to={`/facultyPanel`}>
                    <button type="button" className="btn btn-danger">Back</button>
                </Link>

                <table >

                    <thead>
                        <tr>
                            <th>STREAM</th>
                            <th>SEM</th>
                            <th>SUBJECT 1</th>
                            <th>SUBJECT 2</th>
                            <th>SUBJECT 3</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>BCA</td>
                                        <td>1ST</td>
                                        <td>{student.operatingsystemattended}<hr/>OPERATING SYSTEM</td>
                                        <td>{student.dsaattended}<hr/>DSA</td>
                                        <td>{student.oopsattended}<hr/>OOPS</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/totalOsAttendance/${student.id}/${student.operatingsystemattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">OPERATING SYSTEM</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/totalDsaAttendance/${student.id}/${student.dsaattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">DSA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/totalOopsAttendance/${student.id}/${student.oopsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">OOPS</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>BCA</td>
                                        <td>2ND</td>
                                        <td>{student.dbmsattended}<hr/>DBMS</td>
                                        <td>{student.pythonattended}<hr/>PYTHON</td>
                                        <td>{student.networkingattended}<hr/>NETWORKING</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/totalDbmsAttendance/${student.id}/${student.dbmsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">DBMS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/totalPythonAttendance/${student.id}/${student.pythonattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">PYTHON</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/totalNetworkingAttendance/${student.id}/${student.networkingattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">NETWORKING</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>BCA</td>
                                        <td>3RD</td>
                                        <td>{student.itattended}<hr/>INOFRMATION TECHNOLOGY</td>
                                        <td>{student.javaattended}<hr/>JAVA</td>
                                        <td>{student.cattended}<hr/>C LANGUAGE</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/totalitAttendance/${student.id}/${student.itattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">INOFRMATION TECHNOLOGY</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/totalJavaAttendance/${student.id}/${student.javaattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">JAVA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/totalCAttendance/${student.id}/${student.cattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">C LANGUAGE</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>BCA</td>
                                        <td>4TH</td>
                                        <td>{student.flaskattended}<hr/>FLASK</td>
                                        <td>{student.djangoattended}<hr/>DJANGO</td>
                                        <td>{student.webdevattended}<hr/>WEBDEV</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalflaskAttendance/${student.id}/${student.flaskattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">FLASK</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalDjangoAttendance/${student.id}/${student.djangoattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">DJANGO</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalwebdevAttendance/${student.id}/${student.webdevattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">WEBDEV</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>BCA</td>
                                        <td>5TH</td>
                                        <td>{student.mernattended}<hr/>MERN</td>
                                        <td>{student.meanattended}<hr/>MEAN</td>
                                        <td>{student.mysqlattended}<hr/>MYSQL</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalmernAttendance/${student.id}/${student.mernattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">MERN</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalmeanAttendance/${student.id}/${student.meanattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">MEAN</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalmysqlAttendance/${student.id}/${student.mysqlattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">MYSQL</button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>BCA</td>
                                        <td>6TH</td>
                                        <td>{student.aptitudeattended}<hr/>APTITUDE</td>
                                        <td>{student.multimediaattended}<hr/>MULTIMEDIA</td>
                                        <td>{student.designingattended}<hr/>DESIGNING</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalaptitudeAttendance/${student.id}/${student.aptitudeattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">APTITUDE</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalmultimediaAttendance/${student.id}/${student.multimediaattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">MULTIMEDIA</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotaldesigningAttendance/${student.id}/${student.designingattended}`}>
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
