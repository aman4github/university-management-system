import React, { useEffect, useState } from 'react'
import '../../../../style/studentVerification.css'
import { getTotalAttendanceByStream } from '../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function TotalClassAttendedBBA() {
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
                                        <td>BBA</td>
                                        <td>1ST</td>
                                        <td>{student.statisticsattended}<hr/>STATISTICS</td>
                                        <td>{student.mathsattended}<hr/>MATHS</td>
                                        <td>{student.accountsattended}<hr/>ACCOUNTS</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalstatisticsAttendance/${student.id}/${student.statisticsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">STATISTICS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalmathsAttendance/${student.id}/${student.mathsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">MATHS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalaccountsAttendance/${student.id}/${student.accountsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">ACCOUNTS</button>
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
                                        <td>BBA</td>
                                        <td>2ND</td>
                                        <td>{student.managementattended}<hr/>MANAGEMENT</td>
                                        <td>{student.salesattended}<hr/>SALES</td>
                                        <td>{student.retailmanagementattended}<hr/>RETAIL MANAGEMENT</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalmanagementAttendance/${student.id}/${student.managementattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">MANAGEMENT</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalsalesAttendance/${student.id}/${student.salesattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">SALES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalretailmanagementAttendance/${student.id}/${student.retailmanagementattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">RETAIL MANAGEMENT</button>
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
                                        <td>BBA</td>
                                        <td>3RD</td>
                                        <td>{student.macroeconomicsattended}<hr/>MACRO ECONOMICS</td>
                                        <td>{student.financialaccountingattended}<hr/>FINANCIAL ACCOUNTING</td>
                                        <td>{student.consumerbehaviourattended}<hr/>CONSUMER BEHAVIOUR</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalmacroeconomicsAttendance/${student.id}/${student.macroeconomicsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">MACRO ECONOMICS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalfinancialaccountingAttendance/${student.id}/${student.financialaccountingattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">FINANCIAL ACCOUNTING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalconsumerbehaviourAttendance/${student.id}/${student.consumerbehaviourattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">CONSUMER BEHAVIOUR</button>
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
                                        <td>BBA</td>
                                        <td>4TH</td>
                                        <td>{student.calculusattended}<hr/>CALCULUS</td>
                                        <td>{student.productmanagementattended}<hr/>PRODUCT MANAGEMENT</td>
                                        <td>{student.communicationattended}<hr/>COMMUNICATION</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalcalculusAttendance/${student.id}/${student.calculusattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">CALCULUS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalproductmanagementAttendance/${student.id}/${student.productmanagementattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">PRODUCT MANAGEMENT</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalcommunicationAttendance/${student.id}/${student.communicationattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">COMMUNICATION</button>
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
                                        <td>BBA</td>
                                        <td>5TH</td>
                                        <td>{student.businessmathattended}<hr/>BUSINESS MATH</td>
                                        <td>{student.computingattended}<hr/>COMPUTING</td>
                                        <td>{student.languagelabattended}<hr/>LANGUAGE LAB</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalbusinessmathAttendance/${student.id}/${student.businessmathattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">BUSINESS MATH</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalcomputingAttendance/${student.id}/${student.computingattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">COMPUTING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotallanguagelabAttendance/${student.id}/${student.languagelabattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">LANGUAGE LAB</button>
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
                                        <td>BBA</td>
                                        <td>6TH</td>
                                        <td>{student.softwarelabattended}<hr/>SOFTWARE LAB</td>
                                        <td>{student.businessaccountingattended}<hr/>BUSINESS ACCOUNTING</td>
                                        <td>{student.businesslawattended}<hr/>BUSINESS LAW</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalsoftwarelabAttendance/${student.id}/${student.softwarelabattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">SOFTWARE LAB</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalbusinessaccountingAttendance/${student.id}/${student.businessaccountingattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">BUSINESS ACCOUNTING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalbusinesslawAttendance/${student.id}/${student.businesslawattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">BUSINESS LAW</button>
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
