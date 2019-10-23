import React from 'react';
import { Link, Route } from 'react-router-dom';


export default function Emotions(props) {
  return (
    <div id="emotions">
      <div id="instructions">
        <h2 id="title">Feelings</h2>
        <h3>１・リピート練習</h3>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/feeling-helper1.png?raw=true" />
        <p>全てのカードを使い終わったら交代してお子さんに Are you~?の質問をしてもらいます。始めのうちはなかなか言えないと思うので、お手伝いしてあげながら練習してみましょう！</p>
        <h3>２・Are you~?の練習</h3>
        <p>Yes! No! はもう答えられると思うので、まずお母さんが全てのカードを使ってAre you ~? の質問をします。</p>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/feeling-helper2.png?raw=true" />
        <h3>３・ゲーム</h3>
        <p>ゲームをしましょう！ここではブロックを積み上げるゲームをします。（何かお家にあるゲームでももちろんOKです！１人ずつ交代しながらプレーするゲームであれば使えます。）</p>

        <ul>
          <li>＊カードを全て裏にして一束にして置く</li>
          <li>＊お母さんが１枚カードを引いてAre you~?の質問をする</li>
          <li>＊お子さんが答えたら、お子さんが１つブロックを置く</li>
          <li>＊ブロックが倒れるまで交代しながら続ける</li>
        </ul>
      </div>
      <div id="flashcards">
          <img id="hungry" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/hungry.png?raw=true" onClick={props.handleClick} />

          <img id="sleepy" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/sleepy.png?raw=true" onClick={props.handleClick} />

          <img id="angry" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/angry.png?raw=true" alt="" />

          <img id="excited" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/excited.png?raw=true" alt="" />

          <img id="surprised" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/surprised.png?raw=true" alt="" />

          <img id="sad" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/sad.png?raw=true" alt="" />

          <img id="tired" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/tired.png?raw=true" alt="" />

          <img id="happy" onClick={props.handleClick} className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/happy.png?raw=true" alt="" />

      </div>
      </div>
      )
}