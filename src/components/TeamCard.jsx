import React from "react";
import "../styles/TeamCard.css"
import "../styles/index.css"

export default function TeamCard(props){
    return(
        <div className="team-card-container">
            <img src={props.profile} alt="" className="team-profile-image"/>
            <h2 className="team-person-name">{props.name}</h2>
            <p className="team-person-position">{props.position}</p>
        </div>
    )
}