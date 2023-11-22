// services/appointmentService.js

import axios from 'axios';

//  URL base api backend
const API_BASE_URL = 'http://localhost:8080/appointments';

// traigo los horarios disponibles
const getAvailableAppointmentTimes = (date) => {
    return axios.get(`${API_BASE_URL}/available-times`, {
        params: { date }
    }).then(response => response.data);
};

// creo nueva cita
const createAppointment = (appointmentData) => {
    return axios.post(API_BASE_URL, appointmentData).then(response => response.data);
};



export { getAvailableAppointmentTimes, createAppointment };
