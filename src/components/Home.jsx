import React from 'react';
import { Link, Route } from 'react-router-dom';



export default function Home(props) {
  window.scrollTo(0, 0)
  return (
    <div id="landing-page">
      <h1>L. Hoppy</h1>
      <h2>Enjoy teaching English and learning Japanese!
        <div>
          <img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/welcome.png?raw=true" alt="welcome" />
          </div>
      </h2>
      <div id="hoppy-welcome">
      <p>無料のアルファベットドリル・英会話の教え方・日本語学習者用リーディングエクササイズのサイトです。</p>

      <p>＊商用利用はご遠慮ください</p>

      <p>You can download alphabet practice drills and flash cards for kids and students. I hope this website helps you prepare for teaching! More drills and flash cards will be added little by little. Japanese articles are also available for learners of Japanese to practice reading!</p>

        <p>＊Non-commercial use only</p>
      </div>
      <div id="updates">
      <h3>Updates</h3>
      </div>
    </div>
  )
}