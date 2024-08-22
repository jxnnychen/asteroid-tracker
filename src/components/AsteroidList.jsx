import React from 'react'
import AsteroidCard from './AsteroidCard'

export default function AsteroidList({asteroids, onAsteroidClick}) {
  if(!asteroids || asteroids.length === 0) {
    return <p>No passing asteroids found for the selected date.</p>
  }
  return (
    <div className="grid grid-cols-1 gap-4">
      {asteroids.map(asteroid => (
        <AsteroidCard key={asteroid.id} asteroid={asteroid} onAsteroidClick={onAsteroidClick}/>
      ))}
    </div>
  )
}
