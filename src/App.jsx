 
import './App.css' 

import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='App'>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App