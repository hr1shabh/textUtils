import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";  

function App() {
  const [mode, setMode] = useState('light');
const toggleMode = () =>{
  if(mode === 'light') {setMode('dark');
  document.body.style.backgroundColor = 'black';
}
  else{ setMode('light');
  document.body.style.backgroundColor = 'white';
}
}

  return (
  <>
  <Router>
  <Navbar mode = {mode} toggleMode = {toggleMode}/>

  <Switch>
          <Route exact path="/about">
            <About />
          </Route>  
          <Route exact path="/">
          <TextForm mode = {mode}/>
          </Route>
        </Switch>
        </Router>
  </>
  );
}

export default App;
