import React from 'react';
import './App.css';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
    <Contact
    name="Olivia Sullivan" 
    avatar="https://randomuser.me/api/portraits/women/61.jpg"
    online
    />
    <Contact 
    name="Jessie Mills" 
    avatar="https://randomuser.me/api/portraits/women/28.jpg"
    online
    />
    <Contact 
    name="Hector Freeman"
    avatar="https://randomuser.me/api/portraits/men/88.jpg"
    />
    </div>
  );
}


export default App;
