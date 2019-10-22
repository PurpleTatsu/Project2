import React from 'react';

export default function YesNo(props) {
  return (
    <div id="yesno">
      <div id="instructions">
        <h2 id="title">Yes! No!</h2>
        <img></img>
        <p>Foodで使ったフードカードを使ってYes と No の使い方を練習しましょう！まずはフードカートの復習から始めます。</p>

        <h2>１・リピート練習</h2>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/food-helper1.png?raw=true" />
        <h2>２・Yes Noの練習</h2>
        <p>両手で
        丸を作りながら
        Yes</p>
        <p>両手で
        バツを作りながら
        No</p>
        <h3>３・Do you like~?の質問を作る練習と答える練習をする
        </h3>
        <p>（まずはお母さんがお子さんに全てのカードを使って質問します）</p>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/food-helper2.png?raw=true" />
        <h2>４・全部のカードを聞き終わったら交代する　        </h2>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/food-helper3.png?raw=true" />
        <h2>５・ゲーム </h2>
        <p>１００円ショップなどで売っているような簡単なゲームをします。例えばたくさんポテトが入っていて１本ずつ引いていくとどれかが紐で本体と繋がっていて全部のポテトが飛び出すような。剣を刺して人形が飛び出すゲームも人気です。 </p>
        <p>ここではポテトのゲームを例に使います。
        ①カードを束にして裏向きに置く
        ②お母さんが一番上のカードを引く</p>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/food-helper4.png?raw=true" />
        <p>③お子さんがポテトを一本引く
        ④お子さんが次のカードを引いてDo you like~?を聞く
        ⑤お母さんがポテトを一本引く

        これを繰り返して先にハズレのポテトを引いてしまった方が負けです。このゲームに慣れてきたら、食べ物部分をキャラクターや他のお菓子（ここのポイントはDo you like ~ ?が使える事なので、英語で言葉でわからなければ私はそのまま日本語を使います。）に置き換えてゲームをします。</p>
      </div>
      <div id="flashcards">
        <h2>イメージをクリックしてください！</h2>
        <img id="yes" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/yes.jpg?raw=true" onClick={props.handleClick} alt="" />
        <img id="no" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/no.jpg?raw=true" onClick={props.handleClick} alt="" />

      </div>
    </div>
  )

}