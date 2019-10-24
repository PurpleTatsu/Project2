import React from 'react';


export default function Weather(props) {
  window.scrollTo(0, 0)
  return (
    
    <div id="weather">
      <div id="instructions">
        <h2 id="title">Weather</h2>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/weather-helper1.png?raw=true" />
        <h3>１・１枚ずつカードを見せながらリピート練習</h3>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/weather-helper2.jpeg?raw=true" />
        <h3>２・♬ Weather song</h3>
        <p>絵を見せながらだったり、ダンスをしたりしながら歌うと楽しいです。</p>
        <h3>３・今日の天気を聞く　</h3>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/weather-helper3.jpeg?raw=true" />
        <p>練習を始めて間もない頃は、すべてのカードを並べて今日の天気をタッチさせてから、リピートしてもらってOK!
</p>
      </div>
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