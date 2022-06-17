import React from "react";

export default function Contact(props) {
  console.log(props)
  return (
    <div className="contact-card">
      <img src={props.img} alt="cat"/>
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={require("../images/phone-icon.png")} alt="Call"/>
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={require("../images/mail-icon.png")} alt="Gmail"/>
        <p>{props.email}</p>
      </div>
    </div>
  )
}