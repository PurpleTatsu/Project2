import React from 'react';
import Diary from './Diary';


export default function HoppyJapanese() {
  window.scrollTo(0, 0)
  return (


    <div id="home">
      <div id="diary-intro">
        <h1>Welcome to Hoppy Japanese</h1>
        <p>A Japanese woman Yu-chan is going to share her story from her life looking back on her diary. She is 66 years old now and she has had a wonderful life with her sister Mi-chan and her parents. You can practice Japanese through her diary.</p>    </div>
      <div id="diary">
        <h2>Diary of Yu-chan</h2>
        <Diary />

      </div>


    </div>
  )
}