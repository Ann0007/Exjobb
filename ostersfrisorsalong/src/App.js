import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Gallery from './components/gallery/Gallery';
import Prices from './components/prices/Prices';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/aboutus" component={AboutUs}/>
        <Route path="/prices" component={Prices}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
