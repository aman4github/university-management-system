import React from 'react'
import '../../style/adminPanel.css'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useEffect } from 'react'

export default function AdminPanel() {
  useEffect(() => {
    const id = localStorage.getItem("faculty-id")
    if (id != 0) {
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
    <>
      <div className="outerWrapperAdmin outerWrapperAdminTop" style={{ background: "linear-gradient(to right, #907bdd, #3A98B9)" }}>

        <h1 className='heading-admin'>Admin Panel</h1>
        <button type="button" className="btn btn-danger heading-btn-admin" onClick={logout}>Logout</button>

        <div className="innerWrapper innerWrapperTop">
          <div className="wrapper">
            <h2 style={{ color: "white" }}>Student Verification</h2>
            <div className="dropdown">
              <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                STREAM
              </a>

              <ul className="dropdown-menu">
                <Link className="dropdown-item" to="/studentVerificationBCA">BCA</Link>
                <Link className="dropdown-item" to="/studentVerificationBBA">BBA</Link>
                <Link className="dropdown-item" to="/studentVerificationBHM">BHM</Link>
              </ul>
            </div>
          </div>
          <div className="wrapper">
            <h2 style={{ color: "white" }}>Notice</h2>
            <div className="dropdownSection" style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div className="dropdown">
                <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  UPLOAD
                </a>

                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/BcaNoticeUpload">BCA</Link>
                  <Link className="dropdown-item" to="/BbaNoticeUpload">BBA</Link>
                  <Link className="dropdown-item" to="/BhmNoticeUpload">BHM</Link>
                </ul>
              </div>
              <div className="dropdown">
                <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  DELETE
                </a>

                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/BcaNoticeDelete">BCA</Link>
                  <Link className="dropdown-item" to="/BbaNoticeDelete">BBA</Link>
                  <Link className="dropdown-item" to="/BhmNoticeDelete">BHM</Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <h2 style={{ color: "white" }}>Student Promotion</h2>

            <Link to="/semesterPanelAdmin" className='btnWrapper'><button>Promote</button></Link>
          </div>
        </div>
        <div className="innerWrapper">
          <div className="wrapper">
            <h3 style={{ color: "white", marginBottom: "20px" }}>ADD FACULTY MEMBER</h3>

            <Link to="/addFaculty" className='btnWrapper'><button>ADD</button></Link>

          </div>
          <div className="wrapper">
            <h2 style={{ color: "white" }}>CHANGE PASSWORD</h2>
            <div className="passSec" style={{ display: "flex", justifyContent: "space-evenly" }}>

              <Link to="/facultyChangePassword" className='btnWrapper'><button>FACULTY</button></Link>

              <Link to="/SemesterPanelPass" className='btnWrapper'><button>STUDENT</button></Link>
            </div>

          </div>
          <div className="wrapper">
            <h2 style={{ color: "white" }}>ALL STUDENT LIST</h2>
            <div className="dropdownSection" style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div className="dropdown">
                <a className="btn btn-secondary dropdownAdmin dropdownAdminLarge dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PENDING/REJECTED
                </a>

                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/pendingOrRejectedStudentsViewBCA">BCA</Link>
                  <Link className="dropdown-item" to="/pendingOrRejectedStudentsViewBBA">BBA</Link>
                  <Link className="dropdown-item" to="/pendingOrRejectedStudentsViewBHM">BHM</Link>
                </ul>
              </div>
              <div className="dropdown">
                <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  APPROVED
                </a>

                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to="/SemesterPanelAdminView">ALL STREAMS</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="innerWrapper">
          <div className="wrapper">
            <h4 style={{ color: "white", marginBottom: "20px" }}>ALL PASSOUT STUDENTS LIST</h4>
            <div className="dropdown">
              <a className="btn btn-secondary dropdownAdmin dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                STREAM
              </a>

              <ul className="dropdown-menu">
                <Link className="dropdown-item" to="/AllPassoutStudentListBCA">BCA</Link>
                <Link className="dropdown-item" to="/AllPassoutStudentListBBA">BBA</Link>
                <Link className="dropdown-item" to="/AllPassoutStudentListBHM">BHM</Link>
              </ul>
            </div>
          </div>
          <div className="wrapper">
            <h2 style={{ color: "white" }}>DELETE</h2>
            <div className="passSec" style={{ display: "flex", justifyContent: "space-evenly" }}>

              <Link to="/facultyDelete" className='btnWrapper'><button>FACULTY</button></Link>

              <Link to="/SemesterPanelDelete" className='btnWrapper'><button>STUDENT</button></Link>
            </div>

          </div>
          <div className="wrapper">
            <h2 style={{ color: "white" }}>EDIT DETAILS</h2>
            <div className="passSec" style={{ display: "flex", justifyContent: "space-evenly" }}>

              <Link to="/facultyEditView" className='btnWrapper'><button>FACULTY</button></Link>

              <Link to="/SemesterPanelEdit" className='btnWrapper'><button>STUDENT</button></Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
