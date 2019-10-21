import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer'
import UchiDeEnglish from './components/UchiDeEnglish'
import Weather from './components/Weather'
import Emotions from './components/Emotions'
import { getFlashcards } from './components/api-helper';
import { Route } from 'react-router-dom';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  // componentDidMount = async () => {
  //   const flashcard = await getFlashcards(this.state.apiKey, this.state.id)
  //   console.log(flashcard)
  //   this.setState({
  //     id: flashcard
  //   })
  // }

  playSound = (flashcard) => {
    var audio = new Audio(flashcard)
    audio.type = 'audio/mp3';
    var playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(function () {
        console.log('Playing....');
      }).catch(function (error) {
        console.log('Failed to play....' + error);
      });
    }
  }

  handleClick = async (event) => {
    const flashcardId = event.target.id;
    console.log(flashcardId)
    const flashcard = await getFlashcards(flashcardId)
    this.playSound(flashcard)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <main>
        
          <Route exact path="/" render={() => <UchiDeEnglish />} />

          <Route path="/Weather" render={() => (<Weather handleClick={this.handleClick} />)} />
          <Route path="/Emotions" render={() => (<Emotions handleClick={this.handleClick} />)} />

        </main>
        <Footer />
      </div>
    );
  }
}
export default App;