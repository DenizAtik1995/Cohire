import 'whatwg-fetch';

class MovieAPI {

  api = {
    key: 'd5989da1517d7182f1ae5529fcbdb122',
    root: 'http://api.themoviedb.org/3/',
    endpoints: {
      search: 'search/movie',
      genre: 'genre/movie/list'
    }
  };

  getGenres() {
    return window.fetch(`${this.api.root}${this.api.endpoints.genre}?api_key=${this.api.key}`)
  }

  /**
   *
   * @param query { String } Partial or full query of movie title, used to query the API
   */
  searchMovies(query) {
    return window.fetch(`${this.api.root}${this.api.endpoints.search}?query=${query}&api_key=${this.api.key}`);
  }

}

export default MovieAPI;
