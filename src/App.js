import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import UchiDeEnglish from './components/UchiDeEnglish'
import HoppyJapanese from './components/HoppyJapanese'
import Weather from './components/Weather'
import Emotions from './components/Emotions'
import { getFlashcards } from './components/api-helper';
import { Route } from 'react-router-dom';
import Food from './components/Food'
import Warmup from './components/Warmup'
import Name from './components/Name'
import Colors from './components/Colors'
import ABC from './components/ABC'
import YesNo from './components/YesNo'
import DaysOfTheWeek from './components/DaysOfTheWeek'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
     
    }
  }

  //referenced from StackOverflow
  playSound = (flashcard) => {
    let audio = new Audio(flashcard)
    audio.type = 'audio/mp3';
    let playPromise = audio.play();

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
    const loadingGif = "https://media0.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif?cid=790b761144b2a9f84f9ac6f2dc0b7f905b3b463748c39aa2&rid=giphy.gif"
  }
 
 

  render() {
    const { open } = this.state;
      return (
        <div className="App">
          <Header />
          <main>
          
            <Route exact path="/" render={() => <UchiDeEnglish />} />
            <Route path="/HoppyJapanese" render={() => (<HoppyJapanese handleClick={this.handleClick} />)} />

            <Route path="/Warmup" render={() => (<Warmup handleClick={this.handleClick} />)} />

            <Route path="/Weather" render={() => (<Weather handleClick={this.handleClick} timeout={3000} />)} />
            <Route path="/Emotions" render={() => (<Emotions handleClick={this.handleClick} />)} />
            <Route path="/Food" render={() => (<Food handleClick={this.handleClick} />)} />
            <Route path="/Name" render={() => (<Name handleClick={this.handleClick} />)} />
            <Route path="/Colors" render={() => (<Colors handleClick={this.handleClick} />)} />
            <Route path="/ABC" render={() => (<ABC handleClick={this.handleClick} />)} />
            <Route path="/YesNo" render={() => (<YesNo handleClick={this.handleClick} />)} />
            <Route path="/DaysOfTheWeek" render={() => (<DaysOfTheWeek handleClick={this.handleClick} />)} />


          </main>
          <Footer />
        </div>
      );
    }
  }

  export default App;
