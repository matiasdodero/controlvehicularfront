import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/vehicles';

const vehicleEvaluationService = {
    createVehicleEvaluation: async (evaluationData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/evaluate`, evaluationData);
            return response.data;
        } catch (error) {
            console.error('Error al crear la evaluación del vehículo:', error);
            throw error;
        }
    },

};

export default vehicleEvaluationService;
