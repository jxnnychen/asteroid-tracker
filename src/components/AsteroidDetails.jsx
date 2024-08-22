import React from 'react'

export default function AsteroidDetails({asteroid, onClose}) {
  if (!asteroid) return null

  const hazardStatus = asteroid.is_potentially_hazardous_asteroid 
    ? "Yes" 
    : "No"
  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{asteroid.name}</h2>
        <p><strong>Absolute Magnitude:</strong> {asteroid.absolute_magnitude_h}</p>
        <h3 className="mt-4 font-bold">Estimated Diameter:</h3>
          <p>Kilometers: {asteroid.estimated_diameter.kilometers.estimated_diameter_min} - {asteroid.estimated_diameter.kilometers.estimated_diameter_max} km</p>
          <p>Miles: {asteroid.estimated_diameter.miles.estimated_diameter_min} - {asteroid.estimated_diameter.miles.estimated_diameter_max} mi </p>

        <h3 className="mt-4 font-bold">Close Approach Details:</h3>
          <p>Close Approach Date: {asteroid.close_approach_data[0].close_approach_date_full}</p>
          <p>Miss Distance: {asteroid.close_approach_data[0].miss_distance.kilometers} km</p>
          <p>Velocity: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>

        <p className="mt-4">Potentially Hazardous: {hazardStatus}</p>
        <p className="mt-4">NASA JPL URL: <a href={asteroid.nasa_jpl_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Click Here</a></p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
    </div>
  )
}
