import React from 'react';
import { Link, Route } from 'react-router-dom';


export default function かぞく(props) {
  window.scrollTo(0, 0)
  return (
    <div id="diary-entry">
      <h2>私の家族</h2>
      <img id="diary-image" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/%E3%81%8B%E3%81%9E%E3%81%8F1.jpeg?raw=true" />
      <p id="かぞく">
        <h3>Click for audio, hover for furigana.</h3>
        <h4 id="きょう" title="きょう" onClick={props.handleClick}>今日</h4>は<h4 id="わたし" title="わたし" onClick={props.handleClick}>私</h4>の<h4 id="かぞく" title="かぞく" onClick={props.handleClick}>家族</h4>を<h4 id="しょうかい" title="しょうかい" onClick={props.handleClick}>紹介</h4>します。まずは、<h4 id="いもうと" title="いもうと" onClick={props.handleClick}>妹</h4>のみーちゃん。みーちゃんはまだ<h4 id="ようちえんせい" title="ようちえんせい" onClick={props.handleClick}>幼稚園生</h4>です。とても<h4 id="げんき" title="げんき" onClick={props.handleClick}>元気</h4>でいつも私と <h4 id="あそびます" title="あそびます" onClick={props.handleClick}>遊びます</h4>。 <h4 id="すき" title="すき" onClick={props.handleClick}>好き</h4>な <h4 id="たべもの" title="たべもの" onClick={props.handleClick}>食べ物</h4>はハンバーグです。 <h4 id="つぎ" title="つぎ" onClick={props.handleClick}>次</h4>に <h4 id="おかあさん" title="おかあさん" onClick={props.handleClick}>お母さん</h4>を紹介します。お母さんはとても <h4 id="やさしい" title="やさしい" onClick={props.handleClick}>優しい</h4>です。 <h4 id="えいご" title="えいご" onClick={props.handleClick}>英語</h4>がとても <h4 id="じょうず" title="じょうず" onClick={props.handleClick}>上手</h4>なので、みーちゃんに英語を <h4 id="おしえ" title="おしえ" onClick={props.handleClick}>教え</h4>ています。お母さんは、 <h4 id="おかいもの" title="おかいもの" onClick={props.handleClick}>お買い物</h4>が <h4 id="だいすき" title="だいすき" onClick={props.handleClick}>大好き</h4>です。 <h4 id="さいご" title="さいご" onClick={props.handleClick}>最後</h4>に <h4 id="おとうさん" title="おとうさん" onClick={props.handleClick}>お父さん</h4>。お父さんは、カフェをしています。お父さんは <h4 id="りょうり" title="りょうり" onClick={props.handleClick}>料理</h4>がとても上手です。お父さんのカレーはすごく <h4 id="おいしい" title="おいしい" onClick={props.handleClick}>美味しい</h4>です。
      </p>
    </div>
  )
}
