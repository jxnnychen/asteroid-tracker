import React from 'react'

export default function AsteroidCard({asteroid, onAsteroidClick}) {
  
  return (
    <div key={asteroid.id} className="p-4 border rounded-lg shadow-md bg-gray-800 text-white cursor-pointer" onClick={() => onAsteroidClick(asteroid)}>
        <h2 className="text-lg font-bold">{asteroid.name}</h2>
        <p>Miss Distance: {asteroid.close_approach_data[0].miss_distance.kilometers} km</p>
        <p>Velocity: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
    </div>
);
}
