import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import '../../../../style/adminPanel.css'

export default function SemesterPanel() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    return (
        <div className="outerWrapperAdmin outerWrapperAdminTop" style={{ background: "linear-gradient(to right, #907bdd, #3A98B9)" }}>
            <h1 className='heading-admin'>Admin Panel (DELETE STUDENT)</h1>
            <Link to={`/adminPanel`}>
                <button type="button" className="btn btn-danger heading-btn-admin">Back</button>
            </Link>
            <div className="innerWrapper innerWrapperTop">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>1ST SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/adminallStudentDeleteBCA1st">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBBA1st">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBHM1st">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDeleteBCA2nd">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBBA2nd">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBHM2nd">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDeleteBCA3rd">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBBA3rd">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBHM3rd">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDeleteBCA4th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBBA4th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBHM4th">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDeleteBCA5th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBBA5th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBHM5th">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDeleteBCA6th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBBA6th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDeleteBHM6th">BHM</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>PASSOUT STUDENT</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/passoutBca">BCA</Link>
                            <Link className="dropdown-item" to="/passoutBba">BBA</Link>
                            <Link className="dropdown-item" to="/passoutBhm">BHM</Link>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <h3 style={{ color: "white" }}>PENDING/REJECTED STUDENT</h3>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/NotApprovedBca">BCA</Link>
                            <Link className="dropdown-item" to="/NotApprovedBba">BBA</Link>
                            <Link className="dropdown-item" to="/NotApprovedBhm">BHM</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
