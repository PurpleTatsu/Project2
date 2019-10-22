import React from 'react';


export default function Name(props) {
  return (
    <div id="name">
      <div id="instructions"></div>
      <h3>What’s your name?</h3>
      <p>まずはお子さんに名前を聞きます。お名前を答えるんだよ。とわかるように、まずは自分の名前を言います。 </p>
      <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/name-helper1.png?raw=true" />
      <p> 次に、hisとherの練習をしてみましょう！</p>
      <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/name-helper2.png?raw=true" />
      <h3>１・お母さんが名前を聞く</h3>
      <p>何回か繰り返して質問し、？の時は I don’t know の練習をする。</p>

      <h3>２・交代してお母さんが名前を聞く</h3>
      <p>※家族の写真を使ったり、覚えて欲しい人の写真や似顔絵を描いてオリジナルのシートを使ってもGOOD!</p>

      <p>※私は初めてsheが女の子heが男の子と教えずに練習します。年齢にもよりますが、自然とsheで男の子がheだよと言った方がわかってくれる生徒さんもいます。様子を見ながら練習してみてください。</p>
      <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/name-helper3.png?raw=true" />

      <img></img>
      <div id="flashcards">
      <h2>イメージをクリックしてください！</h2>
        <img className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/name-flashcard.png?raw=true" onClick={props.handleClick} alt="" />

      </div>


    </div>

  )
}