import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/service" component={Service} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </>
  )
}

export default App;
