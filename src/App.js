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

function App() {
  return (
    // <Times/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    //   <Navbar/>
    //   <Main/>
    //   <Footer/>
      
    // </div>
    // <div className="todo-list">
    //   <ToDo/>
    //   <ToDo/>
    //   <ToDo/>
    // </div>
    <div>
      {/* <ContactCard
      name="Anshul"
      imgUrl="http://placekitten.com/300/200"
      phone="9874563210"
      email="abc@abc.com"
      />

      <ContactCard
      name="Anshul"
      imgUrl="http://placekitten.com/400/200"
      phone="9874563210"
      email="abc@abc.com"
      />

      <ContactCard
      name="Anshul"
      imgUrl="http://placekitten.com/400/300"
      phone="9874563210"
      email="abc@abc.com"
      />

      <ContactCard
      name="Anshul"
      imgUrl="http://placekitten.com/200/100"
      phone="9874563210"
      email="abc@abc.com"
      /> */}
      <Joke
        punchline="It's hard to explain xyz because they always take things literally."/>
      <Joke 
        question="what's the best thing about Switzerland" 
        punchline="I don't know, but the flag is a big plus"/>
      <Joke 
        question="Did u hear about the Mathematician who's afraid of negative numbers?" 
        punchline="He'll stop at nothing to avoid then!"/>
      <Joke
       question="Hear about the new resturant about karma?"
       punchline="There's no menu: You get what you deserve."/>
      <Joke
        question="Did you hear about the actor who fell through the floorboards?"
        punchline="he was just going through a stage."/>
    </div>
  );
}

export default App;
