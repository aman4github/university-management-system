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
        <div className="outerWrapperAdmin" style={{ background: "linear-gradient(to right, #907bdd, #3A98B9)" }}>
            <h1 className='heading-admin'>Admin Panel (Password Change)</h1>
            <Link to={`/adminPanel`}>
                <button type="button" className="btn btn-danger heading-btn-admin">Back</button>
            </Link><div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>1ST SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/adminallStudentPassBCA1st">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBBA1st">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBHM1st">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentPassBCA2nd">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBBA2nd">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBHM2nd">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentPassBCA3rd">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBBA3rd">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBHM3rd">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentPassBCA4th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBBA4th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBHM4th">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentPassBCA5th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBBA5th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBHM5th">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentPassBCA6th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBBA6th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentPassBHM6th">BHM</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
