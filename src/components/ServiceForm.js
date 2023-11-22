import React, { useState } from 'react';
import { createServiceModel } from '../services/serviceModelService';

function ServiceForm() {
    const [serviceModel, setServiceModel] = useState({
        name: '',
        description: '',
        price: ''
    });

    const handleChange = (e) => {
        setServiceModel({ ...serviceModel, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createServiceModel(serviceModel);
            console.log(response);

            setServiceModel({ name: '', description: '', price: '' });
        } catch (error) {
            console.error("Hubo un error al crear el modelo de servicio", error);

        }
    };

    return (
        <div>
            <h2>Añadir un Nuevo Servicio</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre del Servicio:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={serviceModel.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={serviceModel.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Precio:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={serviceModel.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Guardar Servicio</button>
            </form>
        </div>
    );
}

export default ServiceForm;
