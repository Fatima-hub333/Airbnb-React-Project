import React from 'react'

export default function Card(props) {
  // console.log(props)
  return (
    <div className="card">
      <img src={require('../images/katie-zaferes.png')} className="card--image" alt="card-1"/>
      <div className="card--stats">
        <img src={require('../images/star.png')} alt="rating" className="card--star"/>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}