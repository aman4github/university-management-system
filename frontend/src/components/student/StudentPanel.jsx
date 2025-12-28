import React from 'react'
import Swal from 'sweetalert2';
import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';


export default function StudentPanel() {
    const navigate = useNavigate();
    const name = localStorage.getItem("name");
    const sem = localStorage.getItem("sem");
    const stream = localStorage.getItem("stream");

    useEffect(() => {
        const id = localStorage.getItem("id")
        if (!id) {
            window.location.href = "http://localhost:3000/";
        }
    }, [])

    const logout = () => {
        localStorage.clear();
        console.log("logout")
        // alert("logged Out");
        Swal.fire({
            title: 'Success!',
            text: 'Logged Out',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/");
    }

    const viewAttendance = () => {
        if (sem == "1ST" && stream == "BCA")
            navigate('/ViewAttendanceBca1st');
        else if (sem == "2ND" && stream == "BCA")
            navigate('/ViewAttendanceBca2nd');
        else if (sem == "3RD" && stream == "BCA")
            navigate('/ViewAttendanceBca3rd');
        else if (sem == "4TH" && stream == "BCA")
            navigate('/ViewAttendanceBca4th');
        else if (sem == "5TH" && stream == "BCA")
            navigate('/ViewAttendanceBca5th');
        else if (sem == "6TH" && stream == "BCA")
            navigate('/ViewAttendanceBca6th');

        else if (sem == "1ST" && stream == "BBA")
            navigate('/ViewAttendanceBba1st');
        else if (sem == "2ND" && stream == "BBA")
            navigate('/ViewAttendanceBba2nd');
        else if (sem == "3RD" && stream == "BBA")
            navigate('/ViewAttendanceBba3rd');
        else if (sem == "4TH" && stream == "BBA")
            navigate('/ViewAttendanceBba4th');
        else if (sem == "5TH" && stream == "BBA")
            navigate('/ViewAttendanceBba5th');
        else if (sem == "6TH" && stream == "BBA")
            navigate('/ViewAttendanceBba6th');

        else if (sem == "1ST" && stream == "BHM")
            navigate('/ViewAttendanceBhm1st');
        else if (sem == "2ND" && stream == "BHM")
            navigate('/ViewAttendanceBhm2nd');
        else if (sem == "3RD" && stream == "BHM")
            navigate('/ViewAttendanceBhm3rd');
        else if (sem == "4TH" && stream == "BHM")
            navigate('/ViewAttendanceBhm4th');
        else if (sem == "5TH" && stream == "BHM")
            navigate('/ViewAttendanceBhm5th');
        else if (sem == "6TH" && stream == "BHM")
            navigate('/ViewAttendanceBhm6th');
        else
            navigate("/studentPanel")
    }

    let locationSem1st = "";
    let locationSem2nd = "";
    let locationSem3rd = "";
    let locationSem4th = "";
    let locationSem5th = "";
    let locationSem6th = "";

    if (stream == "BCA") {
        locationSem1st = "/ViewResultBca1st";
        locationSem2nd = "/ViewResultBca2nd";
        locationSem3rd = "/ViewResultBca3rd";
        locationSem4th = "/ViewResultBca4th";
        locationSem5th = "/ViewResultBca5th";
        locationSem6th = "/ViewResultBca6th";
    }
    else if (stream == "BBA") {
        locationSem1st = "/ViewResultBba1st";
        locationSem2nd = "/ViewResultBba2nd";
        locationSem3rd = "/ViewResultBba3rd";
        locationSem4th = "/ViewResultBba4th";
        locationSem5th = "/ViewResultBba5th";
        locationSem6th = "/ViewResultBba6th";

    }
    else if (stream == "BHM") {
        locationSem1st = "/ViewResultBhm1st";
        locationSem2nd = "/ViewResultBhm2nd";
        locationSem3rd = "/ViewResultBhm3rd";
        locationSem4th = "/ViewResultBhm4th";
        locationSem5th = "/ViewResultBhm5th";
        locationSem6th = "/ViewResultBhm6th"
    }
    else
        navigate("/studentPanel")

    const viewResult = () => {
        navigate('/viewResult')
    }

    const studentDetail = () => {
        navigate('/studentDetails')
    }

    const newPassChange = () => {
        navigate('/changePassWord')
    }

    return (
        <div className="outerWrapperAdmin" style={{ background: "linear-gradient(to right, #a993f8, #FC2947)" }}>
            <h1 className='heading-admin'>Welcome {name}</h1>
            <button type="button" className="btn btn-danger heading-btn-admin" onClick={logout}>Logout</button>
            <div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>Attendance</h2>
                    <button type="button" className="btnWrapper" onClick={viewAttendance}>View</button>
                </div>
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>Result</h2>
                    <div className="dropdownSection" style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ODD SEM
                            </a>

                            <ul className="dropdown-menu">
                                <Link className="dropdown-item" to={locationSem1st}>1ST SEMESTER</Link>
                                <Link className="dropdown-item" to={locationSem3rd}>3RD SEMESTER</Link>
                                <Link className="dropdown-item" to={locationSem5th}>5TH SEMESTER</Link>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                EVEN SEM
                            </a>

                            <ul className="dropdown-menu">
                                <Link className="dropdown-item" to={locationSem2nd}>2ND SEMESTER</Link>
                                <Link className="dropdown-item" to={locationSem4th}>4TH SEMESTER</Link>
                                <Link className="dropdown-item" to={locationSem6th}>6TH SEMESTER</Link>
                            </ul>
                        </div>
                    </div>
                    {/* <button type="button" className="btnWrapper" onClick={viewResult}>View</button> */}
                </div>
            </div>
            <div className="innerWrapper">
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>Student Details</h2>
                    <button type="button" className="btnWrapper" onClick={studentDetail}>View</button>
                </div>
                <div className="wrapper">
                    <h2 style={{ color: "white" }}>Change Password</h2>
                    <button type="button" className="btnWrapper" onClick={newPassChange}>Change</button>
                </div>
            </div>
        </div>
    )
}
