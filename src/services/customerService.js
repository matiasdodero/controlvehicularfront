import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/customers/'; //

const customerService = {
    // Obtener todos los clientes
    getAllCustomers: async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener los clientes:', error);
            throw error;
        }
    },

    // traigo cliente por ID
    getCustomerById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener el cliente:', error);
            throw error;
        }
    },

    // creo Cliente
    createCustomer: async (customerData) => {
        try {
            const response = await axios.post(API_BASE_URL, customerData);
            return response.data;
        } catch (error) {
            console.error('Error al crear el cliente:', error);
            throw error;
        }
    },

    // actualizo cliente
    updateCustomer: async (id, customerData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/${id}`, customerData);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el cliente:', error);
            throw error;
        }
    },

    // elimino cliente
    deleteCustomer: async (id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al eliminar el cliente:', error);
            throw error;
        }
    }
};

export default customerService;
