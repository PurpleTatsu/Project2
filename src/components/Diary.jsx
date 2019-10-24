import React from 'react';
import { Link } from 'react-router-dom';


export default function Diary() {
  window.scrollTo(0, 0)
  return (
    <div id="diary" className="diary">
      <Link to="/hoppyjapanese/FamilyDiary">
        <img id="family" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/1family.png?raw=true" title="私の家族" />
        <p>私の家族</p>
      </Link>

      <div>
        <img id="likes" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/2likes.png?raw=true" title="" />
        <p>好きなこと</p>
      </div>

      <div>
        <img id="familyvacation" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/3familyvacation.jpeg?raw=true" title="" />
        <p>家族旅行 1日目</p>
      </div>

      <div>
        <img id="familyvacation" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/4familyvacation.jpg?raw=true" title="" />
        <p>家族旅行２日目</p>
      </div>

      <div>
        <img id="familyvacation" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/5familyvacation.jpeg?raw=true" title="" />
        <p>家族旅行３日目</p>
      </div>

      <div>
        <img id="snow" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/6snow.png?raw=true" title="" />
        <p>雪</p>
      </div>

      <div>
        <img id="beautysalon" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/7beautysalon.jpeg?raw=true" title="" />
        <p>美容室</p>
      </div>

      <div>
        <img id="lunch" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/8lunch.jpeg?raw=true" title="" />
        <p>ランチバイキング</p>
      </div>
      <div>
        <img id="firefighter" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/9firefighters.png?raw=true" title="" />
        <p> 消防署</p>
      </div>
      <div>
        <img id="bakery" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/11bakery.jpeg?raw=true" title="" />
        <p>ジョギングとパン屋さん</p>
      </div>
      <div>
        <img id="hospital" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/12hospital.png?raw=true" title="" />
        <p>病院</p>
      </div>
      <div>
        <img id="mothers-day" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/13mothersday.png?raw=true" title="" />
        <p>母の日</p>
      </div>
      <div>
        <img id="new-cake" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/14newcake.jpg?raw=true" title="" />
        <p>パパの新作ケーキ</p>
      </div>
      <div>
        <img id="zoo" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/15zoo.png?raw=true" title="" />
        <p>動物園</p>
      </div>
      <div>
        <img id="movies" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/16movies.jpeg?raw=true" title="" />
        <p>映画館</p>
      </div>
      <div>
        <img id="garden" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/17garden.jpg?raw=true" title="" />
        <p>おうちのお庭</p>
      </div>
      <div>
        <img id="grape-hunt" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/18grapehunt.jpg?raw=true" title="" />
        <p>ぶどう狩り</p>
      </div>
      <div>
        <img id="night" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/19night.png?raw=true" title="" />
        <p>夜</p>
      </div>
      <div>
        <img id="unlucky-day" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/20unluckyday.png?raw=true" title="" />
        <p>アンラッキーデー</p>
      </div>
      <div>
        <img id="new-drink" className="likes-desc" src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/21newdrink.jpg?raw=true" title="" />
        <p>新作ドリンク</p>
      </div>
    </div>
  )
}

