import React, { useState } from 'react';
import { toast } from 'react-toastify';
import vehicleEvaluationService from "../services/vehicleEvaluationService";

function VehicleEvaluationForm() {
    const [evaluation, setEvaluation] = useState({
        vehicleId: '',
        lightsScore: '',
        brakesScore: '',
        overallScore: '',
        evaluationDate: '',
        comments: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await vehicleEvaluationService.createVehicleEvaluation(evaluation);

            const score = response.overallScore;


            if (score > 80) {
                toast.success("El vehículo es seguro.");
            } else if (score < 40) {
                toast.warn("El vehículo necesita rechequeo. Por favor, solicitar un nuevo Turno");
            } else if (evaluation.brakesScore < 5 || evaluation.lightsScore < 5) {
                toast.warn("El vehículo necesita rechequeo debido a puntajes bajos en áreas críticas. Solicitar nuevo Turno");
            } else {
                toast.info("Evaluación guardada.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error al guardar la evaluación.");
        }
    };

    const handleChange = (event) => {
        setEvaluation({ ...evaluation, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <h2>Evaluación del Vehículo</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID del Vehículo:</label>
                    <input
                        type="number"
                        name="vehicleId"
                        value={evaluation.vehicleId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Puntuación de Luces:</label>
                    <input
                        type="number"
                        name="lightsScore"
                        value={evaluation.lightsScore}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Puntuación de Frenos:</label>
                    <input
                        type="number"
                        name="brakesScore"
                        value={evaluation.brakesScore}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Puntuación Total:</label>
                    <input
                        type="number"
                        name="overallScore"
                        value={evaluation.overallScore}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Fecha de Evaluación:</label>
                    <input
                        type="date"
                        name="evaluationDate"
                        value={evaluation.evaluationDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Comentarios:</label>
                    <textarea
                        name="comments"
                        value={evaluation.comments}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Guardar Evaluación</button>
            </form>
        </div>
    );
}

export default VehicleEvaluationForm;
