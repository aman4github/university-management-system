import React, { useEffect, useState } from 'react'
// import '../../../../style/studentVerification.css'
import { Link, useNavigate } from 'react-router-dom';
import '../../../../style/detailsPage.css'

export default function ViewAttendanceBhm3rd() {
  const [student, setStudent] = useState("");
  const [total, setTotal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      navigate("/StudentPanel");
      return;
    }
    loaddata();


  }, [navigate]);

  const loaddata = async () => {
    const id = localStorage.getItem("id");
    await fetch(`http://127.0.0.1:8081/viewAttendanceDetails?id=` + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      if (response.ok) {
        response.json().then(stu => {
          setStudent(stu);
        }).catch(error => {
          console.error('Error parsing JSON:', error);
        });
      }
    }).catch(error => {
      console.error('Error fetching data:', error);
    });

    const facultyIdAttendance = 0;

    await fetch(`http://127.0.0.1:8081/viewAttendanceDetailsFaculty?id=` + facultyIdAttendance, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      if (response.ok) {
        response.json().then(stu => {
          setTotal(stu);
        }).catch(error => {
          console.error('Error parsing JSON:', error);
        });
      }
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  if (!student) {
    return <div>Loading student details...</div>;
  }

  return (
    <>
      <div className="outer-table detailsTable">
        <Link to={`/studentPanel`}>
          <button type="button" className="btn btn-danger">Back</button>
        </Link>

        <div className="detailsStudent">Attendance</div>

        <table >


          <tbody>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", width: "max-content", color: "white", borderRadius: "15px" }}>Student ID</td>
              <td>{student.id}</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", width: "max-content", color: "white", borderRadius: "15px" }}>Stream</td>
              <td>{student.stream}</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Semester</td>
              <td>{student.sem}</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Subject - LEADERSHIP SKILLS</td>
              <td>Presented - {student.leadershipskills}/{total.leadershipskillsattended} Days</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Subject - HOUSEKEEPING</td>
              <td>Presented - {student.housekeeping}/{total.housekeepingattended} Days</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Subject - TOURISM MARKETING</td>
              <td>Presented - {student.tourismmarketing}/{total.tourismmarketingattended} Days</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}
