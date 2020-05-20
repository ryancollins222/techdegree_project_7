import React, {Component} from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

class PhotoContainer extends Component {
  render() {
    let results = this.props.results;
    return (
      <div className="photo-container">
        {results.length > 0 && 
          <h2>Results</h2>
        }
        <ul>
          {results.map(photo => 
            <Photo 
              {...photo}
              key={photo.id}
            />
          )}
          {results.length === 0 &&
            <NotFound />
          }
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;