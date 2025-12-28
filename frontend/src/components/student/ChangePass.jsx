import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ChangePass() {

    const navigate = useNavigate();

    const [newPass, setNewPass] = useState();
    const [id,setId]=useState();
    
    useEffect(() => { 
        const id=localStorage.getItem("id")
        setId(id);
        if(!id){
            window.location.href = "http://localhost:3000/StudentPanel";
        }}, [])

    const onInputChange = (e) => {
        setNewPass(e.target.value)
    };

    const newPassChange= (e) => {
        fetch(`http://127.0.0.1:8081/studentChangeNewPass?id=${id}&newPass=${newPass}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        }).then(response => {

            if (response.ok) {
                
                Swal.fire({
                    title: 'Success!',
                    text: 'New Passwsord Set',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                    navigate('/StudentPanel');
                    // alert("New PassWord Set")
            }
            else {
                // alert("password cant change")
                Swal.fire({
                    title: 'Error!',
                    text: 'Password Change Failed...',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                // window.location.href = "http://localhost:3000/StudentPanel";
                navigate('/StudentPanel');
            }
        }).catch(console.error())
    };


    return (
        <div className="regForm">
            <div className="container containerReg">
                <Link to={`/studentPanel`}>
                    <button className="back-button">BACK</button>
                </Link>

                <div className="title"  style={{marginBottom: "50px"}}>Change Password</div>
                <div className="content">
                    {/* <form onSubmit={(e) => onSubmit(e)}> */}
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">New Password</span>
                                <input
                                    type="text"
                                    name="pass"
                                    placeholder="Enter your new Password"
                                    value={newPass}
                                    onChange={(e) => onInputChange(e)}
                                    required
                                    style={{marginBottom: "30px"}}
                                />
                            </div>                          
                        </div>


                        <div className="button"  style={{marginBottom: "50px"}}>
                            {/* <input type="submit" value="Register Now" /> */}
                            <button onClick={newPassChange}>Change</button>
                            
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}
