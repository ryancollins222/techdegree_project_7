import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// app components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

let App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Route path="/results" component={PhotoContainer}/>
      </div>
    </BrowserRouter>
  );
}

export default App;