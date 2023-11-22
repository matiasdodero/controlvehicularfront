import React, { useState } from 'react';
import customerService from '../services/customerService';



function CustomerForm() {
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await customerService.createCustomer(customer);
            console.log('Cliente creado:', response);

        } catch (error) {
            console.error('Error al crear el cliente:', error);

        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={customer.firstName}
                onChange={handleChange}
                placeholder="Nombre"
            />
            <input
                type="text"
                name="lastName"
                value={customer.lastName}
                onChange={handleChange}
                placeholder="Apellido"
            />
            <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="text"
                name="phoneNumber"
                value={customer.phoneNumber}
                onChange={handleChange}
                placeholder="Número de Teléfono"
            />
            <button type="submit">Crear Cliente</button>
        </form>
    );
}

export default CustomerForm;
