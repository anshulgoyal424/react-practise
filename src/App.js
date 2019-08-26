import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/MainContent"
import ToDo from "./components/ToDo"
import Times from "./components/time"
import ContactCard from "./components/ContactCard"

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
      <ContactCard
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
      />
    </div>
  );
}

export default App;
