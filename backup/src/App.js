import './App.css';
import React from 'react';
import MainComponent from './components/MainComponent/MainComponent';

import Dashboard from './components/dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blogs from './components/Blogs/Blogs';
import Reviews from './components/Reviews/Reviews';
function App() {
  return (

    <div>
      <Switch>
        <Route exact path='/' component={MainComponent} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/reviews' component={Reviews} />
        <Route component={ErrorPage} />
      </Switch>


    </div>
  );
}

export default App;
