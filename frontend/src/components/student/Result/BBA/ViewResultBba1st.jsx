import React, { useEffect, useState } from 'react'
// import '../../../../style/studentVerification.css'
import { Link, useNavigate } from 'react-router-dom';
import '../../../../style/detailsPage.css'

export default function ViewResultBba1st() {
  const [student, setStudent] = useState("");
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
    await fetch(`http://127.0.0.1:8081/viewResult1st?id=` + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
      if (response.ok) {
        response.json().then(stu => {
          setStudent(stu);
        }).catch(error => {
          console.error('Error parsing JSON:', error);
          // navigate("/error404");
        });
      }}
      else
        navigate("/errorResultView");
    }).catch(error => {
      console.error('Error fetching data:', error);
      // navigate("/error404");
    });

  }

  if (!student) {
    navigate("/errorResultView");
  }

  return (
    <>
      <div className="outer-table detailsTable">
        <Link to={`/studentPanel`}>
          <button type="button" className="btn btn-danger">Back</button>
        </Link>

        <div className="detailsStudent">Result</div>

        <table >


          <tbody>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", width: "max-content", color: "white", borderRadius: "15px" }}>Student ID</td>
              <td>{student.id}</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", width: "max-content", color: "white", borderRadius: "15px" }}>Name</td>
              <td>{localStorage.getItem("name")}</td>
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
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Subject - Statistics</td>
              <td>{student.statistics}/100</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Subject - Maths</td>
              <td>{student.maths}/100</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Subject - Accounts</td>
              <td>{student.accounts}/100</td>
            </tr>
            <tr>
              <td className="detailsTd" style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Total</td>
              <td>{(parseInt(student.statistics) + parseInt(student.maths) + parseInt(student.accounts))}/300</td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}