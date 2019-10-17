import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';
import './App.css';

const name = "Dwayne Ferguson";
const avatar = "https://randomuser.me/api/portraits/men/83.jpg";
const status = false;

const name1 = "Melinda Harper";
const avatar1= "https://randomuser.me/api/portraits/women/8.jpg";
const status1 = true;

const name2 = "Clyde Carroll";
const avatar2= "https://randomuser.me/api/portraits/men/7.jpg";
const status2 = false;



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Contact name={name} avatar={avatar} status={status}/> 
      <Contact name={name1} avatar={avatar1} status={status1}/>
      <Contact name={name2} avatar={avatar2} status={status2}/>
      <ContactList/>
      </header>
    </div>
  );
}

export default App;
