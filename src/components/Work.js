import "./WorkCardStyles.css";
import React from 'react'
import WorkCards from "./WorkCards";
import WorkCardsData from "./WorkCardsData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            { WorkCardsData.map((value, index) => {
                return(
                    <WorkCards
                     key={index}
                     imgsrc={value.imgsrc}
                     title={value.title}
                     text={value.text}
                     view={value.view}
                    />
                )
            }) }
        </div>
    </div>
  )
}

export default Work