import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppointmentForm() {
    const [appointment, setAppointment] = useState({
        customerId: '',
        vehicleId: '',
        serviceModelId: '',
        appointmentDate: ''
    });
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    useEffect(() => {
        if (date) {
            axios.get(`/appointments/available-times`, { params: { date } })
                .then(response => {
                    setAvailableTimes(response.data);
                })
                .catch(error => {
                    console.error('Error al cargar horarios disponibles:', error);
                });
        } else {
            setAvailableTimes([]);
        }
    }, [date]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAppointment({ ...appointment, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const fullDateTime = new Date(date + 'T' + time);
            const appointmentData = {
                ...appointment,
                appointmentDate: fullDateTime.toISOString()
            };
            const response = await axios.post(`/appointments/`, appointmentData);
            console.log('Cita creada exitosamente:', response.data);
            // podria resetear o mostrar msje de exito
        } catch (error) {
            console.error('Hubo un error al crear la cita:', error);
            // manejo el error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="customerId">ID Cliente:</label>
                <input
                    type="text"
                    id="customerId"
                    name="customerId"
                    value={appointment.customerId}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="vehicleId">ID Vehículo:</label>
                <input
                    type="text"
                    id="vehicleId"
                    name="vehicleId"
                    value={appointment.vehicleId}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="serviceModelId">ID Servicio:</label>
                <input
                    type="text"
                    id="serviceModelId"
                    name="serviceModelId"
                    value={appointment.serviceModelId}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="date">Fecha de la cita:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="time">Hora de la cita:</label>
                <select
                    id="time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="">Seleccione un horario</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={new Date(time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })}>
                            {new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">Crear Cita</button>
        </form>
    );
}

export default AppointmentForm;
