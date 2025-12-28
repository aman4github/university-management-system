import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import '../../../style/adminPanel.css'

export default function SemesterPanel() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])
    return (
        <div className="outerWrapperAdmin" style={{ background: "linear-gradient(to right, #907bdd, #3A98B9)" }}>
            <h1 className='heading-admin'>Admin Panel (PROMOTE STUDENT)</h1>
            <Link to={`/adminPanel`}>
                <button type="button" className="btn btn-danger heading-btn-admin">Back</button>
            </Link>
            <div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>1ST SEMESTER</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/promoteBca1stSem">BCA</Link>
                            <Link className="dropdown-item" to="/promoteBba1stSem">BBA</Link>
                            <Link className="dropdown-item" to="/promoteBhm1stSem">BHM</Link>
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
                            <Link className="dropdown-item" to="/promoteBca2ndSem">BCA</Link>
                            <Link className="dropdown-item" to="/promoteBba2ndSem">BBA</Link>
                            <Link className="dropdown-item" to="/promoteBhm2ndSem">BHM</Link>
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
                            <Link className="dropdown-item" to="/promoteBca3rdSem">BCA</Link>
                            <Link className="dropdown-item" to="/promoteBba3rdSem">BBA</Link>
                            <Link className="dropdown-item" to="/promoteBhm3rdSem">BHM</Link>
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
                            <Link className="dropdown-item" to="/promoteBca4thSem">BCA</Link>
                            <Link className="dropdown-item" to="/promoteBba4thSem">BBA</Link>
                            <Link className="dropdown-item" to="/promoteBhm4thSem">BHM</Link>
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
                            <Link className="dropdown-item" to="/promoteBca5thSem">BCA</Link>
                            <Link className="dropdown-item" to="/promoteBba5thSem">BBA</Link>
                            <Link className="dropdown-item" to="/promoteBhm5thSem">BHM</Link>
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
                            <Link className="dropdown-item" to="/promoteBca6thSem">BCA</Link>
                            <Link className="dropdown-item" to="/promoteBba6thSem">BBA</Link>
                            <Link className="dropdown-item" to="/promoteBhm6thSem">BHM</Link>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="innerWrapper">
                <div className="wrapper"></div>
                <div className="wrapper"></div>
            </div> */}
        </div>
    )
}
