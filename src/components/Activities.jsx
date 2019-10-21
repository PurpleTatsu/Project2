import React from 'react';
import { Link, Route } from 'react-router-dom';



export default function Ativities() {
  return (
    <div id="activities" className="activities">
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/1warmup.png")} alt="" />
      <Link to="/Weather"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/2weather.png")} alt="" /></Link>
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/3name.png")} alt="" />
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/4color.png")} alt="" />
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/5food.png")} alt="" />
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/6abc.png")} alt="" />
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/7yesno.png")} alt="" />
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/8daysoftheweek.png")} alt="" />
      <Link to="/Emotions"><img src={require("/Users/Tatsu/SEI/project-2/src/components/images/9feelings.png")} alt="" /></Link>
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/10months.png")} alt="" />
      <img src={require("/Users/Tatsu/SEI/project-2/src/components/images/11numbers.png")} alt="" />
    </div>
  )
}