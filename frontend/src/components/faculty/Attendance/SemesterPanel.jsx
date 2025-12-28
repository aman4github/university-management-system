import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import '../../../style/adminPanel.css'

export default function SemesterPanel() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    return (
        <div className="outerWrapperAdmin" style={{ background: "linear-gradient(to right, #00A9FF, #F875AA)" }}>
            <h1 className='heading-admin'>Faculty Panel (Mark Attendance)</h1>
            <Link to={`/facultyPanel`}>
                <button type="button" className="btn btn-danger heading-btn-admin">Back</button>
            </Link><div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>1ST SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/bcaAttendance1st">BCA</Link>
                            <Link className="dropdown-item" to="/bbaAttendance1st">BBA</Link>
                            <Link className="dropdown-item" to="/bhmAttendance1st">BHM</Link>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>2ND SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/bcaAttendance2nd">BCA</Link>
                            <Link className="dropdown-item" to="/bbaAttendance2nd">BBA</Link>
                            <Link className="dropdown-item" to="/bhmAttendance2nd">BHM</Link>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>3RD SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/bcaAttendance3rd">BCA</Link>
                            <Link className="dropdown-item" to="/bbaAttendance3rd">BBA</Link>
                            <Link className="dropdown-item" to="/bhmAttendance3rd">BHM</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>4TH SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/bcaAttendance4th">BCA</Link>
                            <Link className="dropdown-item" to="/bbaAttendance4th">BBA</Link>
                            <Link className="dropdown-item" to="/bhmAttendance4th">BHM</Link>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>5TH SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/bcaAttendance5th">BCA</Link>
                            <Link className="dropdown-item" to="/bbaAttendance5th">BBA</Link>
                            <Link className="dropdown-item" to="/bhmAttendance5th">BHM</Link>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>6TH SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/bcaAttendance6th">BCA</Link>
                            <Link className="dropdown-item" to="/bbaAttendance6th">BBA</Link>
                            <Link className="dropdown-item" to="/bhmAttendance6th">BHM</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
