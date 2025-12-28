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
            <h1 className='heading-admin'>Faculty Panel (View Student)</h1>
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
                            <Link className="dropdown-item" to="/allStudentViewBCA1st">BCA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBBA1st">BBA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBHM1st">BHM</Link>
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
                            <Link className="dropdown-item" to="/allStudentViewBCA2nd">BCA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBBA2nd">BBA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBHM2nd">BHM</Link>
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
                            <Link className="dropdown-item" to="/allStudentViewBCA3rd">BCA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBBA3rd">BBA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBHM3rd">BHM</Link>
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
                            <Link className="dropdown-item" to="/allStudentViewBCA4th">BCA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBBA4th">BBA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBHM4th">BHM</Link>
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
                            <Link className="dropdown-item" to="/allStudentViewBCA5th">BCA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBBA5th">BBA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBHM5th">BHM</Link>
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
                            <Link className="dropdown-item" to="/allStudentViewBCA6th">BCA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBBA6th">BBA</Link>
                            <Link className="dropdown-item" to="/allStudentViewBHM6th">BHM</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
