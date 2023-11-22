// components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/create-customer">Create Customer</Link></li>
                <li><Link to="/create-vehicle">Create Vehicle</Link></li>
                <li><Link to="/create-appointment">Create Appointment</Link></li>
                <li><Link to="/create-service">Create Service</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
