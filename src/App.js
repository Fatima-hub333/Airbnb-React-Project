import React from 'react'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Card from './components/Card'
// import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <div className="contacts">
      <Navbar />
      <Card
        img="katie-zaferes.png" 
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
    
  )
}
