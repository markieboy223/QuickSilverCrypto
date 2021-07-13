import React from 'react';
import './App.css'
import Navbar from './components/nav/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuickSilverSearch from './pages/quicksilversearch/QuickSilverSearch';
import contact from './pages/contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App() {
    return (
     <Router>
       <Navbar />
       <Switch>
         <Route path="/home" exact component={Home} />
         <Route path="/quicksilversearch" exact component={QuickSilverSearch} />
         <Route path="/contact-us" exact component={contact} />
         <Route path="/sign-up" exact component={SignUp} />
         <Route path="/signin" exact component={SignIn} />

       </Switch>
     </Router>
    );
}

export default App;