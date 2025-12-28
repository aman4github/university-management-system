import React from 'react'
import '../style/navbar.css'
import main_logo from '../img/logo/main_logo.jpeg'
import { Link } from 'react-router-dom'
import questionMark from '../img/modal/question-mark.png'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav-color bg-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={main_logo} alt="" height="0" width="40" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse pre-nav" id="navbarSupportedContent">

                        {props.navigation}

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <img src={questionMark} className="modal-img img-fluid" alt="" />
                                    </div>
                                    <div className="modal-body">
                                        <Link to={"/loginTeacher"}>
                                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">LOGIN FOR
                                                FACULTY</button>
                                        </Link>
                                        <Link to={"/loginStudent"}>
                                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">LOGIN FOR
                                                STUDENT</button>
                                        </Link>

                                    </div>
                                    <div className="modal-footer">
                                        <Link to={"/loginAdmin"}>
                                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">LOGIN FOR
                                                COLLEGE</button>
                                        </Link>
                                    </div>
                                    <div className="modal-close">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
