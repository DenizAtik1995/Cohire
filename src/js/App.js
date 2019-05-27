import React, { Component } from 'react';
import '../scss/App.scss';
import Header from "./Component/Header";
import Form from "./Component/Form";
import Movie from "./Component/Movie";
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
      genres: [],
      total: 0,
      errorMessage: false
    };
  }

  componentDidMount() {
    this.api.getGenres(
      data => {
        this.setState({
          genres: data.genres,
          errorMessage: false
        });
      },
      error => {
        /**
         * We could send contents of error to a server to log the results, but this is out of scope for this test
         */
        this.setState({
          errorMessage: 'There was an error, please try again later.'
        })
      });
  }

  // Handles the input field
  handleSearch = (inputValue) => {
    if (inputValue.length > 0) {
      this.api.searchMovies(inputValue,
        data => {
          this.setState({
            inputValue,
            movies: data.results,
            total: data.total_results,
            errorMessage: false
          });
        },
        error => {
          /**
           * we could send contents of error to a server to log the results, but this is out of scope for this test
           */
          this.setState({
            errorMessage: 'There was an error, please try again later.'
          })
        }
      );
    } else {
      this.setState({
        inputValue,
        movies: false,
        total: 0
      });
    }
  };

  render() {
    let Results;
    const { inputValue, movies, total, errorMessage, genres } = this.state;

    if (movies === false) {
      Results = '';
    } else {
      /**
       * @type {MovieDef} movie
       */

      Results = movies.length > 0
        ? movies.map(movie => {
          if (movie.poster_path === null) {
            movie.poster_path = false;
          }

          return <Movie key={movie.id} movie={movie} genres={genres} />
        })
        :
        (
          <div className="error-message">
            <h2>
              There were no movies found for:
              {inputValue}
            </h2>
          </div>
        );
    }

    const TotalResults = total > 0 ? `${total} movies` : '';
    const ErrorMsg = errorMessage ? <h3 className="error-message">{errorMessage}</h3> : '';

    return (
      <div className="app">
        <Header />

        <Form handleSearch={this.handleSearch} genres={genres} />

        <div className="movies">
          <span className="movies__total">{TotalResults}</span>
          {ErrorMsg}
          {Results}
        </div>
      </div>
    );
  }
}

export default App;
