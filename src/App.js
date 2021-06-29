import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index'
import Home from './pages/Home/index';
import About from './pages/About/index'
import Services from './pages/Services/index'
import Contact from './pages/Contact/index'
import Works from './pages/Works/index'
import './App.css';

const App = () => {
  return (
    <div className="home-container">
      <Navbar />
    <div className="page-container">
        
    <Switch >
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/service" component={Services} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/works" component={Works} exact />
        
      </Switch>
    </div>
 
    </div>
  )
}

export default App;
