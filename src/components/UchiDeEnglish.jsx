import React from 'react';
import Activities from './Activities';

import { Link, Route } from 'react-router-dom';



export default function UchiDeEnglish() {
  return (
    <div id="home">
      <div id="intro">
        <h1>おうちでちょこっとEnglish</h1>
        <p>Hello! 幼児から大人までたくさんの方に英語、主に英会話のレッスンをさせてもらってきました。そんな中感じたのは、やっぱり楽しく学んでいると上達する！ということでした。ここでは、私のレッスンからお家でも出来そうなアクティビティーをご紹介させていただきます。幼児期には間違えることに対する抵抗が低く、元気に大きい声で英語を発話してくれやすい傾向にあるなとやはり感じます。そこで、少しでも英語を言える！楽しい！得意！と感じてくれたら未来の学習に大きなプラスだと信じて教えています。今まで英会話をご自身で学んでこれらた保護者の方、キッズに英語を教えることに興味がある方に参考にしていただけたら嬉しいです。</p>
      </div>
      <div id="characters" className="characters">
        <img id="family" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/characters.png?raw=true" alt="family" />
        {/* <img id="mom" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/characters.png?raw=true" alt="mom" /> */}
        <Activities />
      </div>


    </div>
  )
}

