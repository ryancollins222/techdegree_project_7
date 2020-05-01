import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// app components
import NotFound from './NotFound';
import Photo from './Photo';

class PhotoContainer extends Component {
  render() {
    return (
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />
          {/* <!-- Not Found --> */}
          <Route component={NotFound}/>
        </ul>
      </div>
    );
  };
}

export default PhotoContainer;