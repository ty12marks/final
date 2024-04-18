// src/components/WorkoutDetails.js
import React from 'react';

function WorkoutDetails({ workout }) {
    return (
        <div className="p-2 m-2 bg-white rounded shadow">
            <h3 className="text-md font-semibold">{workout.name}</h3>
            <p>{workout.description}</p>
        </div>
    );
}

export default WorkoutDetails;
