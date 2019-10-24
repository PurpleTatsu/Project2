import React from 'react';
import Diary from './Diary';
import axios from 'axios';
import { getKanji } from './api-helper';
import { Route } from 'react-router-dom';
import かぞく from './かぞく'


const apiKey = "da50fcc8d81f46e7aa35e7354864e6b1"

export default class HoppyJapanese extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

   componentDidMount = async (id) => {
      let response = await axios.get(`http://api.voicerss.org/?key=${apiKey}&hl=ja-jp&src=${id}&f=48khz_16bit_stereo&r=-4&c=mp3`);
      const audioUrl = response.config.url;
      return audioUrl
    }
  
  playSound = (flashcard) => {
    let audio = new Audio(flashcard)
    audio.type = 'audio/mp3';
    let playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(function () {
      }).catch(function (error) {
      });
    }
  }

  handleClick = async (event) => {
    const flashcardId = event.target.id;
    console.log(flashcardId)
    const getKanji = this.componentDidMount
    const kanji = await getKanji(flashcardId)
    this.playSound(kanji)
  }


  render() {
    return (

      <div id="home">
        <div id="diary-intro">
          <h1>Welcome to Hoppy Japanese</h1>
          <p>A Japanese woman Yu-chan is going to share her story from her life looking back on her diary. She is 66 years old now and she has had a wonderful life with her sister Mi-chan and her parents. You can practice Japanese through her diary.</p>    </div>
        <div id="diary">
          <h2>Diary of Yu-chan</h2>
          <Diary />
          <main>
          <Route path="/かぞく" render={() => (<かぞく handleClick={this.handleClick} />)} />
          </main>
        </div>


      </div>

    )
  }
}