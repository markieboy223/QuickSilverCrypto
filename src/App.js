import React from 'react';
import './App.css'
import Navbar from './components/nav/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuickSilverSearch from './pages/quicksilversearch/QuickSilverSearch';


function App() {
    return (
     <Router>
       <Navbar />
       <Switch>
         <Route path="/home" exact component={Home} />
         <Route path="/quicksilversearch" exact component={QuickSilverSearch} />
       </Switch>
     </Router>
    );
}

export default App;