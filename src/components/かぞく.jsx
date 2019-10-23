import React from 'react';

export default function FamilyJP(props) {
  return (
    <div id="diary-entry">
      <h2>私の家族</h2>
      <img id="helper-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/かぞく1.jpeg?raw=true" />
      <p id="かぞく">
        <h4 id="きょう" onClick={props.handleClick}>今日</h4>は<h4 id="わたし" onClick={props.handleClick}>私</h4>の<h4 id="かぞく" onClick={props.handleClick}>家族</h4>を<h4 id="しょうかい" onClick={props.handleClick}>紹介</h4>します。まずは、<h4 id="いもうと" onClick={props.handleClick}>妹</h4>のみーちゃん。みーちゃんはまだ<h4 id="ようちえんせい" onClick={props.handleClick}>幼稚園生</h4>です。とても<h4 id="げんき" onClick={props.handleClick}>元気</h4>でいつも私と <h4 id="あそびます" onClick={props.handleClick}>遊びます</h4>。 <h4 id="すき" onClick={props.handleClick}>好き</h4>な <h4 id="たべもの" onClick={props.handleClick}>食べ物</h4>はハンバーグです。 <h4 id="つぎ" onClick={props.handleClick}>次</h4>に <h4 id="おかあさん" onClick={props.handleClick}>お母さん</h4>を紹介します。お母さんはとても <h4 id="やさしい" onClick={props.handleClick}>優しい</h4>です。 <h4 id="えいご" onClick={props.handleClick}>英語</h4>がとても <h4 id="じょうず" onClick={props.handleClick}>上手</h4>なので、みーちゃんに英語を <h4 id="おしえ" onClick={props.handleClick}>教え</h4>ています。お母さんは、 <h4 id="おかいもの" onClick={props.handleClick}>お買い物</h4>が <h4 id="だいすき" onClick={props.handleClick}>大好き</h4>です。 <h4 id="さいご" onClick={props.handleClick}>最後</h4>に <h4 id="おとうさん" onClick={props.handleClick}>お父さん</h4>。お父さんは、カフェをしています。お父さんは <h4 id="りょうり" onClick={props.handleClick}>料理</h4>がとても上手です。お父さんのカレーはすごく <h4 id="おいしい" onClick={props.handleClick}>美味しい</h4>です。
      </p>
    </div>
  )
}
