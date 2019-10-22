import React from 'react';
import { Link, Route } from 'react-router-dom';



export default function Activities() {
  return (
    <div id="activities" className="activities">
      <Link to="/Warmup"><img id="warmup" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/1warmup.png?raw=true" title="英語の練習の前にやってみよう！" /></Link>
      <Link to="/Weather"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/2weather.png?raw=true" title="お天気を英語で言ってみよう！" /></Link>
      <Link to="/Name"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/3name.png?raw=true" title="自分とお友達の名前を言おう！" /></Link>
      <Link to="/Colors"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/4color.png?raw=true" title="色の練習をしよう！" /></Link>
      <Link to="/Food"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/5food.png?raw=true" title="食べ物を英語で言ってみよう！" /></Link>
      <Link to="/ABC"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/6abc.png?raw=true" title="ABCの練習を始めよう！" /></Link>
      <Link to="/YesNo"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/7yesno.png?raw=true" title="Yes Noを言えるようになろう！" /></Link>
      <Link to="/DaysOfTheWeek"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/8daysoftheweek.png?raw=true" title="曜日の練習をしよう！" /></Link>
      <Link to="/Emotions"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/9feelings.png?raw=true" title="気分を英語で言ってみよう！" /></Link>
      {/* <Link to="/Months"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/10months.png?raw=true" title="月と誕生日を練習しよう！" /></Link> 
      <Link to="/Numbers"><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/11numbers.png?raw=true" title="1~60の練習をしよう！" /></Link> */}
    </div>
  )
}