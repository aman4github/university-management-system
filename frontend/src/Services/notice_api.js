import axios from "axios";

const backendUrl = 'http://localhost:8081';

export const addNotice = async (notice) => {
    try {
        return await axios.post(`${backendUrl}/postNotice`, notice);
    } catch (error) {
        console.log('Error while calling addStudent Api ', error.message);
    }
}

export const getAllNoticeByStreamBCA = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getNoticeByStreamBCA/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllNoticeByStreamBBA = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getNoticeByStreamBBA/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const getAllNoticeByStreamBHM = async (stream) => {
    try {
        return await axios.get(`${backendUrl}/getNoticeByStreamBHM/${stream}`);
    } catch (error) {
        console.log('Error while calling getAllStudent api', error.message);
    }
}

export const deleteNotice = async (id) => {
    try {
        return await axios.delete(`${backendUrl}/deleteNotice/${id}`);
    } catch (error) {
        console.log("error while calling delete api", error.message);
    }
}