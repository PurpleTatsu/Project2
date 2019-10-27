import React from 'react';
import { Link, Route } from 'react-router-dom';


export default function Drills() {
  window.scrollTo(0, 0)
  return (
    // <div id="home">
    //   <div id="drills-intro">
    //     <h2>Drills</h2>
    // <div id="drills">
    //   <img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/feelings.png?raw=true" />
    //   <img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/nouns.png?raw=true" />
    //   <img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/a-z.jpeg?raw=true" />
    //     </div>
    //   </div>
    // </div>



    <div id="home">
      <div id="intro">
        <h1>Drills</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore magnam deserunt, pariatur doloremque nisi, commodi molestiae quis similique numquam odit explicabo velit ducimus maxime optio quisquam, aut magni necessitatibus aperiam?</p>      </div>
      <div id="drills">
        <div> <img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/feelings.png?raw=true" />
          <h2>Feelings</h2></div>
        <div><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/nouns.png?raw=true" />
          <h2>Nouns</h2></div>
        <div><img src="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/a-z.jpeg?raw=true" />
          <h2>ABCs</h2></div>


      </div>


    </div>
  )
}