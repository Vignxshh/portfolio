import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Topcontainer from './components/top container/Topcontainer';
import Skillcontainer from './components/skill container/Skillcontainer';
import Project_container from './components/project conatainer/Project_container';
import Contact from './components/contacts/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Project_container />
      <Contact />
   
     
      
    </div>
  );
}

export default App;
