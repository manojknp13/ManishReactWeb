import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index'
import Home from './pages//Home/index';
import About from './pages/About/index'
import Resume from './pages/Resume/index'
import Services from './pages/Services/index'
import Contact from './pages/Contact/index'
import Works from './pages/Works/index'
import './App.css';
const App = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Switch >
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/service" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/works" component={Works} />
        
      </Switch>
 
    </div>
  )
}

export default App;
