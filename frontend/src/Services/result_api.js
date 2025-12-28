import axios from "axios";

const backendUrl = 'http://localhost:8081';

export const addStudent1stSem = async (id) => {
    try {
        return await axios.post(`${backendUrl}/addStudentResult1stSem`, id);
    } catch (error) {
        console.log('Error while calling addStudentAttendance Api ', error.message);
    }
}

export const addStudent2ndSem = async (id) => {
    try {
        return await axios.post(`${backendUrl}/addStudentResult2ndSem`, id);
    } catch (error) {
        console.log('Error while calling addStudentAttendance Api ', error.message);
    }
}

export const addStudent3rdSem = async (id) => {
    try {
        return await axios.post(`${backendUrl}/addStudentResult3rdSem`, id);
    } catch (error) {
        console.log('Error while calling addStudentAttendance Api ', error.message);
    }
}

export const addStudent4thSem = async (id) => {
    try {
        return await axios.post(`${backendUrl}/addStudentResult4thSem`, id);
    } catch (error) {
        console.log('Error while calling addStudentAttendance Api ', error.message);
    }
}

export const addStudent5thSem = async (id) => {
    try {
        return await axios.post(`${backendUrl}/addStudentResult5thSem`, id);
    } catch (error) {
        console.log('Error while calling addStudentAttendance Api ', error.message);
    }
}

export const addStudent6thSem = async (id) => {
    try {
        return await axios.post(`${backendUrl}/addStudentResult6thSem`, id);
    } catch (error) {
        console.log('Error while calling addStudentAttendance Api ', error.message);
    }
}

export const editStudentSemResult1st = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentExisting1stSem/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentSemResult2nd = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentExisting2ndSem/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentSemResult3rd = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentExisting3rdSem/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentSemResult4th = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentExisting4thSem/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentSemResult5th = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentExisting5thSem/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const editStudentSemResult6th = async (student, id) => {
    try {
        return await axios.put(`${backendUrl}/updateStudentExisting6thSem/${id}`, student)
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const getStudentByStreamResult1st = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getResultByStream1st/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamResult2nd = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getResultByStream2nd/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamResult3rd = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getResultByStream3rd/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamResult4th = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getResultByStream4th/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamResult5th = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getResultByStream5th/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getStudentByStreamResult6th = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getResultByStream6th/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

// 1ST SEM 
// BCA RESULT
export const upload1stSemBcaDsaResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcaDsa1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload1stSemBcaOsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcaOs1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload1stSemBcaOopsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcaOops1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA RESULT
export const upload1stSemBbaStatisticsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbaStatistics1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload1stSemBbaMathsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbaMaths1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload1stSemBbaAccountsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbaAccounts1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM RESULT
export const upload1stSemBhmKitchenservicesResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmKitchenservices1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload1stSemBhmFoodpreparationResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmFoodpreparation1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload1stSemBhmCateringsciencesResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmCateringsciences1st/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 2ND SEM 
// BCA RESULT
export const upload2ndSemBcaDbmsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcaDbms2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload2ndSemBcaPythonResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcaPython2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload2ndSemBcaNetworkingResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcaNetworking2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA RESULT
export const upload2ndSemBbaManagementResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbaManagement2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload2ndSemBbaSalesResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbaSales2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload2ndSemBbaRetailmanagementResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbaRetailmanagement2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM RESULT
export const upload2ndSemBhmOperationsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmOperations2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload2ndSemBhmhospitalityservicesResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmhospitalityservices2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload2ndSemBhmcustomerserviceResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmcustomerservice2nd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 3RD SEM 
// BCA RESULT
export const upload3rdSemBcaitResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcait3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload3rdSemBcajavaResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcajava3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload3rdSemBcacResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcac3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA RESULT
export const upload3rdSemBbamacroeconomicsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbamacroeconomics3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload3rdSemBbafinancialaccountingResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbafinancialaccounting3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload3rdSemBbaconsumerbehaviourResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbaconsumerbehaviour3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM RESULT
export const upload3rdSemBhmleadershipskillsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmleadershipskills3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload3rdSemBhmhousekeepingResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmhousekeeping3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload3rdSemBhmtourismmarketingResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmtourismmarketing3rd/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 4TH SEM 
// BCA RESULT
export const upload4thSemBcaflaskResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcaflask4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload4thSemBcadjangoResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcadjango4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload4thSemBcawebdevResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcawebdev4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA RESULT
export const upload4thSemBbacalculusResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbacalculus4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload4thSemBbaproductmanagementResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbaproductmanagement4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload4thSemBbacommunicationResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbacommunication4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM RESULT
export const upload4thSemBhmpublicrelationsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmpublicrelations4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload4thSemBhmfoodscienceResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmfoodscience4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload4thSemBhmhrmanagementResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmhrmanagement4th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 5TH SEM 
// BCA RESULT
export const upload5thSemBcamernResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcamern5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload5thSemBcameanResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcamean5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload5thSemBcamysqlResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcamysql5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA RESULT
export const upload5thSemBbabusinessmathResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbabusinessmath5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload5thSemBbacomputingResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbacomputing5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload5thSemBbalanguagelabResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbalanguagelab5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM RESULT
export const upload5thSemBhmsoftskillsResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmsoftskills5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload5thSemBhmnutritionResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmnutrition5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload5thSemBhmfoodsafetyResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmfoodsafety5th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// 6TH SEM 
// BCA RESULT
export const upload6thSemBcaaptitudeResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcaaptitude6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload6thSemBcamultimediaResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcamultimedia6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload6thSemBcadesigningResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBcadesigning6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BBA RESULT
export const upload6thSemBbasoftwarelabResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbasoftwarelab6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload6thSemBbabusinessaccountingResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbabusinessaccounting6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload6thSemBbabusinesslawResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBbabusinesslaw6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

// BHM RESULT
export const upload6thSemBhmhumanresourcesResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmhumanresources6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload6thSemBhmhotellawResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhmhotellaw6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}

export const upload6thSemBhminternationalbakingResult = async (result, id) => {
    try {
        return await axios.put(`${backendUrl}/submitMarksBhminternationalbaking6th/${id}`, result);
    } catch (error) {
        console.log("error while calling update api", error.message);
    }
}
