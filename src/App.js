/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import './index.css';

export default function App() {
  const cards = data.map((item) => (
    <Card
      key={item.id}
      {...item}
    />
  ));
  return (
    <div className="contacts">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>

    </div>

  );
}
