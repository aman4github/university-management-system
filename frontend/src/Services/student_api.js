import axios from "axios";
import Swal from "sweetalert2";

const backendUrl = 'http://localhost:8081';

export const addStudent = async (student) => {
    try {
        return await axios.post(`${backendUrl}/postStudent`, student).then(response => {
            if (response.status >= 200 && response.status < 300) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your form has been submitted.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                })
            }
        })
    } catch (error) {
        // console.log('Error while calling addStudent Api ', error.message);
        // Swal.fire({
        //     title: 'Error!',
        //     text: 'Server Error Or Mail already exists.',
        //     icon: 'error',
        //     confirmButtonText: 'OK',
        //     allowOutsideClick: false
        // })
        window.location.href = "http://localhost:3000/error404"
    }
}

export const getStudentById = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${backendUrl}/getStudentById/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api', error.message);
    }
}

export const updateStudent = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudent/${id}`, student).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log('Response is OK', response.data);
                Swal.fire({
                    title: 'Success...',
                    text: 'Student Data Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })

    } catch (error) {
        // console.log('Error while calling addStudent Api ', error.message);
        Swal.fire({
            title: 'Error!',
            text: 'Server Error Or Mail already exists',
            icon: 'error',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        })
    }
}

export const getAllStudent = async () => {
    try {
        return await axios.get(`${backendUrl}/getStudent`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStream = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStream/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamAndStatus = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentPassChangeByStreamAndStatus/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamNotApproved = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamNotApproved/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamPassout = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamPassout/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamApproved1stSem = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamApproved1stSem/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamApproved2ndSem = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamApproved2ndSem/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamApproved3rdSem = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamApproved3rdSem/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamApproved4thSem = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamApproved4thSem/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamApproved5thSem = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamApproved5thSem/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamApproved6thSem = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamApproved6thSem/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamPassoutBca = async () => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamAndStatusBCA`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamPassoutBba = async () => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamAndStatusBBA`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllStudentByStreamPassoutBhm = async () => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamAndStatusBHM`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAndStatusBCA = async () => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamAndStatusBCA`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAndStatusBBA = async () => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamAndStatusBBA`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAndStatusBHM = async () => {
    try {
        return await axios.get(`${backendUrl}/getStudentByStreamAndStatusBHM`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const editStudent = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentStatus/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentSem = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentSem/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentPassoutDate = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentPassoutDate/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentSemExistingSem = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentExistingSem/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentPass = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/editStudentPass/${id}`, student);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const deleteStudent = async (id) => {
    try {
        return await axios.delete(`${backendUrl}/deleteStudent/${id}`);
    } catch (error) {
        console.log("error while calling delete api", error.message);
    }
}
