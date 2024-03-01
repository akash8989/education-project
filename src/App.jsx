import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'

const App = () => {

  const [play, setPlay]= useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
    <div className='container'>
      <Title subtitle="Our PROGRAM" title="What We Offer"/>
    <Program/>
    <About setPlay={setPlay}/>
    <Title subtitle="Gallery" title="Campus Photos"/>
    <Campus/>
    <Title subtitle="TESTIMONIALS" title="What Students Says"/>
    <Testimonials/>
    <Title subtitle="Contact Us" title="Get in Touch"/>
    <Contact/>
    <Footer/>
    </div>
    <Videoplayer play={play} setPlay={setPlay}/>
    </div>
  )
}

export default App
