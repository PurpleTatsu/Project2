import React from 'react';

export default function ABC(props) {
  window.scrollTo(0, 0)
  return (
    <div id="abc">
      <div id="abc-instructions" >
        <h3 id="title">ABC</h3>
        <p>♬ ABC song
ABCの表

ABCの表がたくさん販売されているのでお気に入りを
お子さんと一緒に探してみてください</p>
        <h2>１・ABCの表にタッチしながらABCsongを歌う</h2>
        <p>タッチをする時に、手ではなく小さいお人形などを使ってタッチしたら喜んでお歌を歌ってくれました。

何日もかけてお歌を歌ってみてください。スラスラ歌えるようになったなぁと思ったら２に進みます。</p>
        <h2>大文字のアルファベットカード</h2>
        <h2>２・大文字のABCカードを見せながらアルファベットを答えてもらいます。(カードはシャッフルしておく）言えたらお子さん側にカードを置く。言えたら大げさに褒めてあげてください。</h2>
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/abc-helper1.png?raw=true" />
        <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/abc-helper2.png?raw=true" />
        <p>答えるのが苦手そうだなと感じたら、リピート練習に切り替えます。</p>
        <p>小さなお子さんの場合は、飽きてしまうかもしれないのでカードに後ろにマグネットを貼って、ホワイトボードなどがあればそれに貼ってもらってもいいです。体を動かすのが好きなお子さんにはこちらの方が効果的かも知れません。マグネットは片面がシールになっている便利なものもあるのでオススメです。ホワイトボードがなければアルファベットをリピートした後、好きなぬいぐるみの前にカードを重ねていったり箱に入れたりしても飽きずに練習してくれます。</p>
        <p>アルファベットで一番先に覚えるのはほとんどが自分の名前です。例えばアルファベットの表を見ながら「M-ChanのMだ〜！」と言いながら何かと関連づけて練習すると覚えやすいようです。他にも家族の名前や好きなお人形やキャラクターの名前を言いながらアルファベットを教えていくとだんだん覚えてくれます。</p>
      </div >
      <div id="abc-flashcards">
        <section id="eigh" onClick={props.handleClick}>A</section>
        <section id="B" onClick={props.handleClick}>B</section>
        <section id="C" onClick={props.handleClick}>C</section>
        <section id="D" onClick={props.handleClick}>D</section>
        <section id="e" onClick={props.handleClick}>E</section>
        <section id="f" onClick={props.handleClick}>F</section>
        <section id="g" onClick={props.handleClick}>G</section>
        <section id="h" onClick={props.handleClick}>H</section>
        <section id="I" onClick={props.handleClick}>I</section>
        <section id="J" onClick={props.handleClick}>J</section>
        <section id="K" onClick={props.handleClick}>K</section>
        <section id="L" onClick={props.handleClick}>L</section>
        <section id="M" onClick={props.handleClick}>M</section>
        <section id="N" onClick={props.handleClick}>N</section>
        <section id="O" onClick={props.handleClick}>O</section>
        <section id="P" onClick={props.handleClick}>P</section>
        <section id="Q" onClick={props.handleClick}>Q</section>
        <section id="R" onClick={props.handleClick}>R</section>
        <section id="S" onClick={props.handleClick}>S</section>
        <section id="T" onClick={props.handleClick}>T</section>
        <section id="U" onClick={props.handleClick}>U</section>
        <section id="V" onClick={props.handleClick}>V</section>
        <section id="W" onClick={props.handleClick}>W</section>
        <section id="X" onClick={props.handleClick}>X</section>
        <section id="Y" onClick={props.handleClick}>Y</section>
        <section id="Z" onClick={props.handleClick}>Z</section>

      </div>

    </div >
  )
}