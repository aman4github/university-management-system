import axios from "axios";

const backendUrl = 'http://localhost:8081';

export const addStudentAttandance = async (id) => {
    try {
        return await axios.post(`${backendUrl}/postAttendance`, id);
    } catch (error) {
        console.log('Error while calling addStudentAttendance Api ', error.message);
    }
}

export const getAttendanceById = async (id) => {
    try {
        return await axios.get(`${backendUrl}/getAttendanceById/${id}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAttendance = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getAttendanceByStream/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAttendance1st = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getAttendanceByStream1st/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAttendance2nd = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getAttendanceByStream2nd/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAttendance3rd = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getAttendanceByStream3rd/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAttendance4th = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getAttendanceByStream4th/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAttendance5th = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getAttendanceByStream5th/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamAttendance6th = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getAttendanceByStream6th/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const editStudentSemAttendance = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentSemAttendance/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const getTotalAttendanceByStream = async () => {
    try {
        return await axios.get(`${backendUrl}/getTotalAttendanceByStream`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

// BCA Attendance
// 1ST SEM 
export const addAttandanceBcaDsa = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaDsa/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcaOs = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaOs/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcaOops = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaOops/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA Attendance
export const addAttandanceBbaStatistics = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbastatistics/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbaMaths = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbamaths/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbaAccounts = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbaaccounts/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM Attendance
export const addAttandanceBhmCateringsciences = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmcateringsciences/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmFoodpreparation = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmfoodpreparation/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmKitchenservices = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmkitchenservices/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 2ND SEM 
export const addAttandanceBcadbms = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcadbms/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcapython = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcapython/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcanetworking = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcanetworking/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA Attendance
export const addAttandanceBbamanagement = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbamanagement/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbasales = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbasales/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbaretailmanagement = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbaretailmanagement/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM Attendance
export const addAttandanceBhmoperations = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmoperations/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmhospitalityservices = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhospitalityservices/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmcustomerservice = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmcustomerservice/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 3RD SEM 
export const addAttandanceBcait = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcait/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcajava = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcajava/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcac = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcac/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA Attendance
export const addAttandanceBbamacroeconomics = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbamacroeconomics/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbafinancialaccounting = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbafinancialaccounting/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbaconsumerbehaviour = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbaconsumerbehaviour/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM Attendance
export const addAttandanceBhmleadershipskills = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmleadershipskills/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmhousekeeping = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhousekeeping/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmtourismmarketing = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmtourismmarketing/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 4TH SEM 
export const addAttandanceBcaflask = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaflask/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcadjango = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcadjango/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcawebdev = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcawebdev/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA Attendance
export const addAttandanceBbacalculus = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbacalculus/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbaproductmanagement = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbaproductmanagement/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbacommunication = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbacommunication/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM Attendance
export const addAttandanceBhmhrmanagement = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhrmanagement/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmpublicrelations = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmpublicrelations/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmfoodscience = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmfoodscience/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 5TH SEM 
export const addAttandanceBcamern = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcamern/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcamean = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcamean/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcamysql = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcamysql/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA Attendance
export const addAttandanceBbabusinessmath = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbabusinessmath/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbacomputing = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbacomputing/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbalanguagelab = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbalanguagelab/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM Attendance
export const addAttandanceBhmsoftskills = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmsoftskills/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmnutrition = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmnutrition/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmfoodsafety = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmfoodsafety/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 6TH SEM 
export const addAttandanceBcaaptitude = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcaaptitude/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcamultimedia = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcamultimedia/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBcadesigning = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBcadesigning/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA Attendance
export const addAttandanceBbasoftwarelab = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbasoftwarelab/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbabusinessaccounting = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbabusinessaccounting/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBbabusinesslaw = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBbabusinesslaw/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM Attendance
export const addAttandanceBhmhumanresources = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhumanresources/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhmhotellaw = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhmhotellaw/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const addAttandanceBhminternationalbaking = async (attendance, id) => {
    try {
        return await axios.put(`${backendUrl}/putAttendanceBhminternationalbaking/${id}`, attendance)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

