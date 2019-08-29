import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/MainContent"
import ToDo from "./components/ToDo"
import Times from "./components/time"
import ContactCard from "./components/ContactCard"
import Joke from "./components/practise"
import JokeData from "./components/PractiseData"

function App() {
     const JokeComponent = JokeData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline}/>
    )
    return(
      <div>
        {JokeComponent}
      </div>
      
    )
}

export default App;
