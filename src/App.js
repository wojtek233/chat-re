import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';
import './App.css';

const name = "Dwayne Ferguson";
const avatar = "https://randomuser.me/api/portraits/men/83.jpg";

const name1 = "Melinda Harper";
const avatar1= "https://randomuser.me/api/portraits/women/8.jpg";

const name2 = "Clyde Carroll";
const avatar2= "https://randomuser.me/api/portraits/men/7.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Contact name={name} avatar={avatar}/> 
      <Contact name={name1} avatar={avatar1}/>
      <Contact name={name2} avatar={avatar2}/>
      <ContactList/>
      </header>
    </div>
  );
}

export default App;
