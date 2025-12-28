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
            <h1 className='heading-admin'>Admin Panel (Student Data Edit)</h1>
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
                            <Link className="dropdown-item" to="/adminallStudentDataBCA1st">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBBA1st">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBHM1st">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDataBCA2nd">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBBA2nd">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBHM2nd">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDataBCA3rd">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBBA3rd">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBHM3rd">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDataBCA4th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBBA4th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBHM4th">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDataBCA5th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBBA5th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBHM5th">BHM</Link>
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
                            <Link className="dropdown-item" to="/adminallStudentDataBCA6th">BCA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBBA6th">BBA</Link>
                            <Link className="dropdown-item" to="/adminallStudentDataBHM6th">BHM</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
