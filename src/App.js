import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de react-toastify

import CustomerForm from './components/CustomerForm';
import VehicleForm from './components/VehicleForm';
import AppointmentForm from './components/AppointmentForm';
import ServiceForm from './components/ServiceForm';
import VehicleEvaluationForm from './components/VehicleEvaluationForm'; // Importa el nuevo formulario

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/create-customer">Create Customer</Link>
                        </li>
                        <li>
                            <Link to="/create-vehicle">Create Vehicle</Link>
                        </li>
                        <li>
                            <Link to="/create-appointment">Create Appointment</Link>
                        </li>
                        <li>
                            <Link to="/create-service">Create Service</Link>
                        </li>
                        <li>
                            <Link to="/evaluate-vehicle">Evaluate Vehicle</Link> {/* Nuevo enlace para evaluación de vehículos */}
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/create-customer" element={<CustomerForm />} />
                    <Route path="/create-vehicle" element={<VehicleForm />} />
                    <Route path="/create-appointment" element={<AppointmentForm />} />
                    <Route path="/create-service" element={<ServiceForm />} />
                    <Route path="/evaluate-vehicle" element={<VehicleEvaluationForm />} /> {/* Nueva ruta para el formulario de evaluación */}
                </Routes>

                <ToastContainer /> {/* Agrega ToastContainer para mostrar los pop-ups */}
            </div>
        </Router>
    );
}

export default App;

