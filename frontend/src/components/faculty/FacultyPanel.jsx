import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../../style/adminPanel.css'
import Swal from 'sweetalert2';
import { useEffect } from 'react'


export default function FacultyPanel() {
    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (!id || id == 0) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])

    let navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        console.log("logout")
        // alert("logged Out");
        Swal.fire({
            title: 'Success!',
            text: 'Logged Out Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/");

    }
    return (
        <div className="outerWrapperAdmin" style={{ background: "linear-gradient(to right, #00A9FF, #F875AA)" }}>
            <h1 className='heading-admin'>Faculty Panel</h1>
            <button type="button" className="btn btn-danger heading-btn-admin" onClick={logout}>Logout</button>
            <div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>Total Class Assigned</h2>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            STREAM
                        </a>

                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to="/totalClassAttendedBCA">BCA</Link>
                            <Link className="dropdown-item" to="/totalClassAttendedBBA">BBA</Link>
                            <Link className="dropdown-item" to="/totalClassAttendedBHM">BHM</Link>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>Attendance</h2>
                    <Link to="/SemesterPanelAttendance" className='btnWrapper'><button>MARK</button></Link>
                </div>
            </div>
            <div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>Marks</h2>
                    <Link to="/semesterPanelFaculty" className='btnWrapper'><button>UPLOAD</button></Link>

                </div>
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>ALL STUDENT LIST</h2>

                    <Link to="/semPanelViewStudent" className='btnWrapper'><button>VIEW</button></Link>

                </div>
            </div>
        </div>
    )
}
