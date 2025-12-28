import React, { useEffect, useState } from 'react'
import '../../style/studentVerification.css'
import { getAllNoticeByStreamBBA } from '../../Services/notice_api'
import { Link } from 'react-router-dom';

export default function BbaNoticeView() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const studentResult = await getAllNoticeByStreamBBA();
        setStudents(studentResult.data);
        console.log(studentResult.data);
    }

    return (
        <>
            <div className="outer-table">
                <Link to={`/`}>
                    <button type="button" className="btn btn-danger">Back</button>
                </Link>

                <table >

                    <thead>
                        <tr>
                            <th>NOTICE DATE</th>
                            <th>STREAM</th>
                            <th>NOTICE</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr>
                                        <td>{student.notice_date}</td>
                                        <td>{student.stream}</td>
                                        <td><p style={{marginBottom: "0"}}>{student.notice}</p></td>
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
