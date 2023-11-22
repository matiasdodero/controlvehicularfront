import React, { useState } from 'react';
import VehicleService from '../services/vehicleService';

function VehicleForm() {
    const [vehicle, setVehicle] = useState({
        licensePlate: '',
        brand: '',
        model: '',
        year: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setVehicle({ ...vehicle, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await VehicleService.createVehicle(vehicle);
            console.log(response.data);

        } catch (error) {
            console.error('Hubo un error al crear el vehículo', error);

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="licensePlate"
                value={vehicle.licensePlate}
                onChange={handleChange}
                placeholder="License Plate"
            />
            <input
                type="text"
                name="brand"
                value={vehicle.brand}
                onChange={handleChange}
                placeholder="Brand"
            />
            <input
                type="text"
                name="model"
                value={vehicle.model}
                onChange={handleChange}
                placeholder="Model"
            />
            <input
                type="number"
                name="year"
                value={vehicle.year}
                onChange={handleChange}
                placeholder="Year"
            />
            <button type="submit">Create Vehicle</button>
        </form>
    );
}

export default VehicleForm;

