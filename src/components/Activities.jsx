import React from 'react';
import { Link, Route } from 'react-router-dom';



export default function Activities() {
  return (
    <div id="activities" className="activities">
      <Link to="/Warmup"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/1warmup.png")} alt="" /></Link>
      <Link to="/Weather"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/2weather.png")} alt="" /></Link>
      <Link to="/Name"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/3name.png")} alt="" /></Link>
      <Link to="/Colors"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/4color.png")} alt="" /></Link>
      <Link to="/Food"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/5food.png")} alt="" /></Link>
      <Link to="/ABC"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/6abc.png")} alt="" /></Link>
      <Link to="/YesNo"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/7yesno.png")} alt="" /></Link>
      <Link to="/DaysOfTheWeek"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/8daysoftheweek.png")} alt="" /></Link>
      <Link to="/Emotions"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/9feelings.png")} alt="" /></Link>
      <Link to="/Months"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/10months.png")} alt="" /></Link>
      <Link to="/Numbers"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/11numbers.png")} alt="" /></Link>
    </div>
  )
}