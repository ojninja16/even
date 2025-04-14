import React from 'react'
import { Navbar } from './components/Navbar'
import Doctorcard from './components/DoctorCard'
import { DoctorSlider } from './components/DoctorSlider'
import doctors from './data/doctors.json'

function App() {
  const[...doctor]=doctors
  return (
    <>
    <div className='min-w-screen min-h-screen bg-white'>
      <Navbar/>
      <div className='container mx-auto px-6 py-12'>
          <DoctorSlider doctors={doctor}/>
      </div>
    </div>
      
    </>
  )
}

export default App
