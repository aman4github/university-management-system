import React, { useEffect, useState } from 'react'
import '../../../../style/studentVerification.css'
import { getTotalAttendanceByStream } from '../../../../Services/attendance_api'
import { Link } from 'react-router-dom';

export default function TotalClassAttendedBHM() {
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
                                        <td>BHM</td>
                                        <td>1ST</td>
                                        <td>{student.kitchenservicesattended}<hr/>KITCHEN SERVICES</td>
                                        <td>{student.foodpreparationattended}<hr/>FOOD PREPARATION</td>
                                        <td>{student.cateringsciencesattended}<hr/>CATERING SCIENCES</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalkitchenservicesAttendance/${student.id}/${student.kitchenservicesattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">KITCHEN SERVICES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalfoodpreparationAttendance/${student.id}/${student.foodpreparationattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">FOOD PREPARATION</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalcateringsciencesAttendance/${student.id}/${student.cateringsciencesattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">CATERING SCIENCES</button>
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
                                        <td>BHM</td>
                                        <td>2ND</td>
                                        <td>{student.operationsattended}<hr/>OPERATIONS</td>
                                        <td>{student.hospitalityservicesattended}<hr/>HOSPITALITY SERVICES</td>
                                        <td>{student.customerserviceattended}<hr/>CUSTOMER SERVICE</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotaloperationsAttendance/${student.id}/${student.operationsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">OPERATIONS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalhospitalityservicesAttendance/${student.id}/${student.hospitalityservicesattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">HOSPITALITY SERVICES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalcustomerserviceAttendance/${student.id}/${student.customerserviceattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">CUSTOMER SERVICE</button>
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
                                        <td>BHM</td>
                                        <td>3RD</td>
                                        <td>{student.leadershipskillsattended}<hr/>LEADERSHIP SKILLS</td>
                                        <td>{student.housekeepingattended}<hr/>HOUSEKEEPING</td>
                                        <td>{student.tourismmarketingattended}<hr/>TOURISM MARKETING</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalleadershipskillsAttendance/${student.id}/${student.leadershipskillsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">LEADERSHIP SKILLS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalhousekeepingAttendance/${student.id}/${student.housekeepingattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">HOUSEKEEPING</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotaltourismmarketingAttendance/${student.id}/${student.tourismmarketingattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">TOURISM MARKETING</button>
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
                                        <td>BHM</td>
                                        <td>4TH</td>
                                        <td>{student.hrmanagementattended}<hr/>HR MANAGEMENT</td>
                                        <td>{student.publicrelationsattended}<hr/>PUBLIC RELATIONS</td>
                                        <td>{student.foodscienceattended}<hr/>FOOD SCIENCE</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalhrmanagementAttendance/${student.id}/${student.hrmanagementattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">HR MANAGEMENT</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalpublicrelationsAttendance/${student.id}/${student.publicrelationsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">PUBLIC RELATIONS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalfoodscienceAttendance/${student.id}/${student.foodscienceattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">FOOD SCIENCE</button>
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
                                        <td>BHM</td>
                                        <td>5TH</td>
                                        <td>{student.softskillsattended}<hr/>SOFT SKILLS</td>
                                        <td>{student.nutritionattended}<hr/>NUTRITION</td>
                                        <td>{student.foodsafetyattended}<hr/>FOOD SAFETY</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalsoftskillsAttendance/${student.id}/${student.softskillsattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">SOFT SKILLS</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalnutritionAttendance/${student.id}/${student.nutritionattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">NUTRITION</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalfoodsafetyAttendance/${student.id}/${student.foodsafetyattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">FOOD SAFETY</button>
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
                                        <td>BHM</td>
                                        <td>6TH</td>
                                        <td>{student.humanresourcesattended}<hr/>HUMAN RESOURCES</td>
                                        <td>{student.hotellawattended}<hr/>HOTEL LAW</td>
                                        <td>{student.internationalbakingattended}<hr/>INTERNATIONAL BAKING</td>

                                        <td>
                                            <div className="sub">
                                                <Link to={`/TotalhumanresourcesAttendance/${student.id}/${student.humanresourcesattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">HUMAN RESOURCES</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalhotellawaAttendance/${student.id}/${student.hotellawattended}`}>
                                                    <button type="button" class="btn btn-success btnAction">HOTEL LAW</button>
                                                </Link>
                                            </div>
                                            <div className="sub">
                                                <Link to={`/TotalinternationalbakingAttendance/${student.id}/${student.internationalbakingattended}`}>
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
