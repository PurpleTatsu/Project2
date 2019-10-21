import React from 'react';


export default function Weather(props) {
  return (
    <div>
      <div id="flashcards">
        <img id="sunny" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/sunny.png")} onClick={props.handleClick} alt="" />
        <img id="rainy" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/rainy.png")} onClick={props.handleClick} alt="" />
        <img id="cloudy" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/cloudy.png")} onClick={props.handleClick} alt="" />
        <img id="snowy" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/snowy.png")} onClick={props.handleClick} alt="" />
        <img id="windy" className="flashcard" src={require("/Users/Tatsu/SEI/project-2/src/components/images/windy.png")} onClick={props.handleClick} alt="" />
      </div>

    </div>
  )
}