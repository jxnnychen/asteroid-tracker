import React, { useState } from 'react'
import Starfield from 'react-starfield'
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Starfield starCount={1000} starColor={[255, 255, 255]} speedFactor={0.05} backgroundColor="black"/>
      <main className='min-h-screen flex flex-col bg-gradient-to-t from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
        <Main/>
      </main>
    </div>
  )
}

export default App
