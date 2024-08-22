import React, { useState, useEffect } from 'react'
import Starfield from 'react-starfield'
import Main from "./components/Main"
import DateSelector from './components/DateSelector'
import AsteroidList from './components/AsteroidList'
import AsteroidDetails from './components/AsteroidDetails'
import 'react-datepicker/dist/react-datepicker.css'

function App() {
  // get current date
  const getCurrentDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2,'0')
    const day = String(today.getDate()).padStart(2, '0')
    console.log('Year:', year);
    console.log('Month:', month);
    console.log('Day:', day);

    const formattedDate = `${year}-${month}-${day}`;
    console.log('Formatted Date:', formattedDate);

    return formattedDate;
  }

  const [asteroids, setAsteroids] = useState([])
  const [selectedDate, setSelectedDate] = useState(getCurrentDate())
  const [selectedAsteroid, setSelectedAsteroid] = useState(null)
  
  // Fetch mock data from public folder
  const fetchAsteroids = async (date) => {
    try {
      const response = await fetch(`/neoFeed.json`) // fetch() to get file
      const data = await response.json(); // parses JSON response
      console.log(data.near_earth_objects[date])
      setAsteroids(data.near_earth_objects[date] || []) // updates state with asteroids from selected date
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => { // triggers fetchAsteroids function as soon as app loads

    fetchAsteroids(selectedDate);
  }, [selectedDate])

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const handleAsteroidClick = (asteroid) => {
    setSelectedAsteroid(asteroid)
  }

  const closeAsteroidDetails = () => {
    setSelectedAsteroid(null);
  };

  return (
    <div className="App">
      <Starfield starCount={2500} starColor={[255, 255, 255]} speedFactor={0.025}/>
      <main className='min-h-screen flex flex-col bg-gradient-to-t from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
        <Main/>
        
        <div className="text-center">
          <h2 className="text-xl">{asteroids.length} asteroids nearby on <DateSelector onDateChange={handleDateChange} selectedDate={selectedDate} />
          </h2> 
        </div>
        {/* display asteroid list */}
        <div className='items-center justify-center text-center max-w-4xl px-6 pb-8 max-w-[800px] w-full mx-auto p-6'> 
          <AsteroidList asteroids={asteroids} onAsteroidClick={handleAsteroidClick}/> {/* pass fetched asteroids to AsteroidList*/}
        </div>
        {selectedAsteroid && <AsteroidDetails asteroid={selectedAsteroid} onClose={closeAsteroidDetails} />}

      </main>
    </div>
  )
}

export default App
