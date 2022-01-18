import React from 'react'
import Header from './components/Bar/Header';
import HowItWorks from './components/landingPage/howItWorks'
import About from './components/landingPage/About'
import Agent from './components/landingPage/Agent'
import Contact from './components/landingPage/Contact'

function Started() {
    return (
<div >
    <Header/>
    <HowItWorks/>
    <About/>
    <Agent/>
    <Contact />
  </div>
    )
}

export default Started
