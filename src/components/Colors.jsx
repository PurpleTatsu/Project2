import React from 'react';


export default function Colors(props) {
  return (
    <div id="colors">
      <div id="instructions">
        <h3>What color is this?</h3>
        <h3>１・color cardsのリピート練習
２・全てのカードを裏返す
３・お母さんが１枚カードをひっくり返しながら・・・</h3>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/colors-helper1.png?raw=true" />        <p>ちゃんと答えられたら１枚ゲット。今度はお子さんがWhat color?と聞いてお母さんが答えます。まだ色をしっかり覚えていない時はお母さんがヒントをあげるか、カードを並べる時になんとなくお子さんが知っているようなカードの位置を覚えてそれを答えさせてください。カタカナで普段使っている色、ピンク、オレンジ、ブルーなどは覚えやすそうです。
        ４・ Let’s count! と言って一緒に手持ちのカードを数える
５・How many cards do you have?と聞く</p>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/colors-helper2.png?raw=true" />      </div>

      <div id="flashcards">
        <img id="red" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/red.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="beige" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/beige.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="white" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/white.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="yellow" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/yellow.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="orange" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/orange.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="pink" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/pink.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="green" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/green.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="purple" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/purple.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="blue" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/blue.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="black" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/black.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="gray" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/gray.png?raw=true" onClick={props.handleClick} alt="" />
        <img id="brown" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/brown.png?raw=true" onClick={props.handleClick} alt="" />


      </div>

    </div>

  )
}