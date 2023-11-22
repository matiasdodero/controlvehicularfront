import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

class vehicleService {
    createVehicle(vehicleData) {
        return axios.post(`${API_BASE_URL}/vehicles/`, vehicleData);
    }


}

export default new vehicleService();

