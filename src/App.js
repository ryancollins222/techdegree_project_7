import React, {Component} from 'react';
import './index.css';
import apiKey from './config';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// components
import SearchForm  from './components/SearchForm';
import Nav  from './components/Nav';
import PhotoContainer  from './components/PhotoContainer';
import Handle404  from './components/Handle404';

let axios = require('axios');

class App extends Component {

  state = {
    mountainPics: [],
    forestPics: [],
    beerPics: [],
    searchPics: [],
    loading: true
  }

  componentDidMount() {
    axios.all([
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountains&format=json&nojsoncallback=1&per_page=24`),
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=forests&format=json&nojsoncallback=1&per_page=24`),      
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beer&format=json&nojsoncallback=1&per_page=24`)      
    ])
      .then(axios.spread((...res) => {
        this.setState({
          mountainPics: res[0].data.photos.photo,
          forestPics: res[1].data.photos.photo,
          beerPics: res[2].data.photos.photo,
        })
      }))
      
      .catch(error => {
        console.log("Error fetching data", error);
      })
  };

  handleSearch = (query) => {
    this.setState({
    });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`)
      .then(res => {
        this.setState({
          searchPics: res.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm handleSearch={this.handleSearch}/>
          <Nav />

          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountains"/>}/>
            <Route path="/mountains" render={() => <PhotoContainer results={this.state.mountainPics}/>}/>
            <Route path="/forests" render={() => <PhotoContainer results={this.state.forestPics}/>}/>
            <Route path="/beer" render={() => <PhotoContainer results={this.state.beerPics}/>}/>
            <Route path="/search/:query" render={() => <PhotoContainer results={this.state.searchPics}/>}/>
            <Route component={Handle404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
