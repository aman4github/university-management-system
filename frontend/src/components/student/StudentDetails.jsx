import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../style/detailsPage.css'

export default function StudentDetails() {
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const id = localStorage.getItem("id");
        if (!id) {
            navigate("/StudentPanel");
            return;
        }

        fetch(`http://127.0.0.1:8081/viewStudentDetails?id=` + id, {
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
    }, [navigate]);

    if (!student) {
        return <div>Loading student details...</div>;
    }

    return (
        <div className="outer-table detailsTable">
            <Link to="/studentPanel">
                <button type="button" className="btn btn-danger">Back</button>
            </Link>

            <div className="detailsStudent">Student Details</div>

            <table>


                <tbody>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", width: "max-content", color: "white", borderRadius: "15px" }}>Reg Date</td>
                        <td>{student.reg_date}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", width: "max-content", color: "white", borderRadius: "15px" }}>Student ID</td>
                        <td>{student.id}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Name</td>
                        <td>{student.name}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Email</td>
                        <td>{student.email}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Phone</td>
                        <td>{student.phno}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Stream</td>
                        <td>{student.stream}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Semester</td>
                        <td>{student.sem}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Password</td>
                        <td>{student.pass}</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "#BA68C8", color: "white", borderRadius: "15px" }}>Passout Date</td>
                        <td>{student.passout_date}</td>
                    </tr>

                </tbody>
            </table>



        </div>
    );
}
