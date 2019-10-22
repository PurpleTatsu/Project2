import React from 'react';

export default function DaysOfTheWeek(props) {
  return (
    <div id="week">
      <div id="instructions">
        <h2 id="title">Days of the week</h2>
        <h3>１・カレンダーを指差しながら曜日のリピート練習</h3>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/week-helper1.png?raw=true" />
        <h3>２・♬ 曜日の歌</h3>
        <p>歌を選ぶときは曜日を繰り返し歌わない曲がオススメです。指で曜日をさしながら歌いましょう！</p>
      </div>
      <div id="week-flashcards">
        <h2>イメージをクリックしてください！</h2>
        <img id="sunday" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/sunday.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="monday" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/monday.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="tuesday" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/tuesday.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="wednesday" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/wednesday.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="thursday" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/thursday.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="friday" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/friday.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="saturday" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/saturday.png?raw=true" onClick={props.handleClick} alt="" />
      </div>
    </div>
  )
}