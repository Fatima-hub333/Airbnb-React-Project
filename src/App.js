import React from 'react'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './index.css'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })
  return (
    <div className="contacts">
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
      
    </div>
    
  )
}
