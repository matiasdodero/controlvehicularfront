// services/serviceModelService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/serviceModels/';

// agregar nuevo servicio
export const createServiceModel = async (serviceModelData) => {
    try {
        const response = await axios.post(API_URL, serviceModelData);
        return response.data;
    } catch (error) {

        console.error("There was an error creating the service model", error);
        throw error;
    }
};

// traigo todos los ervicios
export const getAllServiceModels = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("There was an error retrieving the service models", error);
        throw error;
    }
};

// traigo servicio x ID
export const getServiceModelById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}${id}`);
        return response.data;
    } catch (error) {
        console.error("There was an error retrieving the service model", error);
        throw error;
    }
};

// actualizo servicio
export const updateServiceModel = async (id, serviceModelData) => {
    try {
        const response = await axios.put(`${API_URL}${id}`, serviceModelData);
        return response.data;
    } catch (error) {
        console.error("There was an error updating the service model", error);
        throw error;
    }
};

// elimino servicio
export const deleteServiceModel = async (id) => {
    try {
        await axios.delete(`${API_URL}${id}`);
    } catch (error) {
        console.error("There was an error deleting the service model", error);
        throw error;
    }
};
