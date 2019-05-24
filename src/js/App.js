import React, { Component } from 'react';
import '../scss/App.scss';
import Header from "./Component/Header";
import Form from "./Component/Form";
import Movie from "./Component/Movie";
import SideMenu from "./Component/SideMenu";
import MovieAPI from './api/api';


/**
 * @typedef {Object} MovieDef
 * @property {string} original_title
 * @property {int} id
 * @property {string | boolean} poster_path
 */

class App extends Component {



  constructor() {
    super();
    this.api = new MovieAPI();
    this.state = {
      inputValue: '',
      movies: false,
      genres: {}
    };
  }

  componentDidMount() {
    this.api.getGenres().then(res => res.json()).then(data => {
      this.setState({
        genres: data.genres
      });
    });
  }

  // Handles the input field
  handleSearch = (inputValue) => {
    if (inputValue.length > 2) {
      this.api.searchMovies(inputValue).then(res => res.json()).then((data) => {
        this.setState({
          inputValue,
          movies: data.results
        });
      });
    } else {
      this.setState({
        inputValue,
        movies: false
      });
    }
  };

  render() {
    let Results;

    if (this.state.movies === false) {
      Results = (
        <h2>search</h2>
      );
    } else {
      /**
       * @type {MovieDef} movie
       */

      Results = this.state.movies.length > 0
        ? this.state.movies.map(movie => {
          if (movie.poster_path === null) {
            movie.poster_path = false;
          }

          return <Movie key={movie.id} movie={movie} genres={this.state.genres} />
        })
        : <h2>There were no movies found for: {this.state.inputValue}</h2>;
    }



    return (
      <div className="app">


        <Header />
        <SideMenu />
        <Form handleSearch={this.handleSearch} />
        <div className="movies">
          {Results}
        </div>
      </div>
    );
  }
}

export default App;
