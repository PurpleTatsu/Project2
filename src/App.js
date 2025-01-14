import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import UchiDeEnglish from './components/UchiDeEnglish'
import HoppyJapanese from './components/HoppyJapanese'
import Weather from './components/Weather'
import Emotions from './components/Emotions'
import { getFlashcards } from './components/api-helper';
import { getKanji } from './components/api-helper';
import { Route } from 'react-router-dom';
import Food from './components/Food'
import Warmup from './components/Warmup'
import Name from './components/Name'
import Colors from './components/Colors'
import ABC from './components/ABC'
import YesNo from './components/YesNo'
import DaysOfTheWeek from './components/DaysOfTheWeek'
import MetaTags from 'react-meta-tags';
import Home from './components/Home'
import Drills from './components/Drills'



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
      }).catch(function (error) {
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
        <MetaTags>
          <title>English At Home</title>
          <meta id="meta-description" name="description" content="Katie Gray GA Project 2." />
          <meta id="og-title" property="og:title" content="English at Home" />
          <meta id="og-image" property="og:image" content="https://github.com/PurpleTatsu/Project2/blob/master/src/components/images/welcome.png?raw=true" />

        </MetaTags>

        <Header />
        <main>
          <Route exact path="/" render={() => <Home />} />

          <Route path="/UchiDeEnglish" render={() => <UchiDeEnglish />} />
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
          <Route path="/Drills" render={() => (<Drills handleClick={this.handleClick} />)} />

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
