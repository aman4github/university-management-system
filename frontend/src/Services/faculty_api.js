import axios from "axios";
import Swal from "sweetalert2";

const backendUrl = 'http://localhost:8081';

export const deleteFaculty = async (id) => {
    try {
        return await axios.delete(`${backendUrl}/deleteFaculty/${id}`);
    } catch (error) {
        console.log("error while calling delete api", error.message);
    }
}

// Total Attendance BCA
// 1st sem 
export const totalAttandanceBcaDsa = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaDsaattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcaOs = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaOperatingsystemattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcaOops = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaOopsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 2nd sem
export const totalAttandanceBcaDbms = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaDbmsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcaPython = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcapythonattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcaNetworking = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcanetworkingattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 3rd sem
export const totalAttandanceBcaIt = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaitattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcaJava = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcajavaattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcaC = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcacattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 4th sem
export const totalAttandanceBcaflask = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaflaskattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcadjango = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcadjangoattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcawebdev = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcawebdevattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 5th sem
export const totalAttandanceBcamean = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcameanattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcamysql = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcamysqlattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcamern = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcamernattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 6th sem
export const totalAttandanceBcaaptitude = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaaptitudeattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcamultimedia = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcamultimediaattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBcadesigning = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcadesigningattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// Total Attendance BBA
// 1st sem 
export const totalAttandanceBbastatistics = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbastatisticsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbamaths = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbamathsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbaaccounts = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbaaccountsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 2nd sem
export const totalAttandanceBbamanagement = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbamanagementattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbasales = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbasalesattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbaretailmanagement = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbaretailmanagementattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 3rd sem
export const totalAttandanceBbamacroeconomics = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbamacroeconomicsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbafinancialaccounting = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbafinancialaccountingattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbaconsumerbehaviour = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbaconsumerbehaviourattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 4th sem
export const totalAttandanceBbacalculus = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbacalculusattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbaproductmanagement = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbaproductmanagementattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbacommunication = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbacommunicationattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 5th sem
export const totalAttandanceBbabusinessmath = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbabusinessmathattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbacomputing = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbacomputingattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbalanguagelab = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbalanguagelabattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 6th sem
export const totalAttandanceBbasoftwarelab = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbasoftwarelabattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbabusinessaccounting = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbabusinessaccountingattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBbabusinesslaw = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbabusinesslawattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// Total Attendance BHM
// 1st sem 
export const totalAttandanceBhmkitchenservices = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmkitchenservicesattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmfoodpreparation = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmfoodpreparationattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmcateringsciences = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmcateringsciencesattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 2nd sem
export const totalAttandanceBhmoperations = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmoperationsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmhospitalityservices = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhospitalityservicesattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmcustomerservice = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmcustomerserviceattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 3rd sem
export const totalAttandanceBhmleadershipskills = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmleadershipskillsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmhousekeeping = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhousekeepingattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmtourismmarketing = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmtourismmarketingattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 4th sem
export const totalAttandanceBhmhrmanagement = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhrmanagementattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmpublicrelations = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmpublicrelationsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmfoodscience = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmfoodscienceattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 5th sem
export const totalAttandanceBhmsoftskills = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmsoftskillsattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmnutrition = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmnutritionattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmfoodsafety = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmfoodsafetyattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 6th sem
export const totalAttandanceBhmhumanresources = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhumanresourcesattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhmhotellaw = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhotellawattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const totalAttandanceBhminternationalbaking = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhminternationalbakingattended/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// Faculty Adding API 
export const addFaculty = async (student, email) => {
    try {
        return await axios.post(`${backendUrl}/postFaculty`, student).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log('Response is OK', response.data);
                const showLoading = () => {
                    Swal.fire({
                        text: 'Please Wait We are Sending Details to the Faculty...Do not Refresh or Back the Page',
                        icon: 'success',
                        showConfirmButton: false,
                        allowOutsideClick: false,
                        willOpen: () => {
                            Swal.showLoading();
                        }
                    })
                }
                showLoading();
                fetch('http://127.0.0.1:8081/sendmailFaculty?mailid=' + email, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                }).then(response => {

                    if (response.ok) {
                        // alert("Mail sent")
                        Swal.fire({
                            title: 'Success!',
                            text: 'Mail Sent',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    }
                    else {
                        // alert("Mail does not exist")
                        Swal.fire({
                            title: 'Error!',
                            text: 'Mail does not exist',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        })
                    }
                }).catch(console.error())
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

export const editFaculty = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateFaculty/${id}`, student).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log('Response is OK', response.data);
                Swal.fire({
                    title: 'Success...',
                    text: 'Faculty Data Updated Successfully',
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

export const getFacultyById = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${backendUrl}/getFacultyById/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api', error.message);
    }
}

export const getAllFaculty = async () => {
    try {
        return await axios.get(`${backendUrl}/getFaculty`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const editFacultyPass = async (faculty, id) => {
    try {
        return await axios.put(`${backendUrl}/editFacultyPass/${id}`, faculty);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}