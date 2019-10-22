import React from 'react';


export default function Food(props) {
  return (
    <div id="food">
      <div id="instructions" >
        <h3>1.フードカードのリピート練習</h3>
        <h3>2. カードタッチゲーム</h3>
        <p>全てのカードを表向きにおく</p>
        <h3>3. お母さんが手を２回叩いて一つ単語を言う</h3>
        <p>お子さんがdonut!と言いながらdonutカードにタッチする
お子さんがdonutカードをキープする。全部カードをとったら終わりです！</p>



      </div >
      <div id="flashcards">
        <img id="chocolate" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/chocolate.jpg?raw=true" onClick={props.handleClick} alt="" />
        <img id="ice-cream" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/ice-cream.jpg?raw=true" onClick={props.handleClick} alt="" />
        <img id="french-fries" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/french-fries.jpg?raw=true" onClick={props.handleClick} alt="" />
        <img id="hamburger" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/hamburger.jpg?raw=true" onClick={props.handleClick} alt="" />
        <img id="parfait" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/parfait.jpg?raw=true" onClick={props.handleClick} alt="" />
        <img id="popcorn" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/popcorn.jpg?raw=true" onClick={props.handleClick} alt="" />
        <img id="donut" className="flashcard" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/donut.jpg?raw=true" onClick={props.handleClick} alt="" />
      </div>

    </div >
  )

}