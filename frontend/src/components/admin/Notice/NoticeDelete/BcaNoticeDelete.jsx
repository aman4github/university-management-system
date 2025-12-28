import React, { useEffect, useState } from 'react'
import '../../../../style/studentVerification.css'
import { getAllNoticeByStreamBCA } from '../../../../Services/notice_api'
import { Link } from 'react-router-dom';

export default function BcaNoticeDelet() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("faculty-id")
        if (id != 0) {
            window.location.href = "http://localhost:3000/";
        }
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getAllNoticeByStreamBCA();
        setStudents(studentResult.data);
        console.log(studentResult.data);
    }

    return (
        <>
            <div className="outer-table">
                <Link to={`/adminPanel`}>
                    <button type="button" className="btn btn-danger">Back</button>
                </Link>

                <table >

                    <thead>
                        <tr>
                            <th>NOTICE DATE</th>
                            <th>STREAM</th>
                            <th>NOTICE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>{student.notice_date}</td>
                                        <td>{student.stream}</td>
                                        <td><p style={{ marginBottom: "0" }}>{student.notice}</p></td>
                                        <td>
                                            <Link to={`/BcaNoticeDeleteConfirmation/${student.id}`}>
                                                <button type="button" class="btn btn-danger btnAction">DELETE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
