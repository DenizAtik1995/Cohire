import 'whatwg-fetch';

class MovieAPI {

  api = {
    key: process.env.REACT_APP_MOVIE_API_KEY,
    root: 'http://api.themoviedb.org/3/',
    endpoints: {
      search: 'search/movie',
      genre: 'genre/movie/list'
    }
  };

  /**
   * @param response {Response}
   * @returns {Promise|PromiseRejectionEvent}
   */
  static status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(`${response.status}, ${response.statusText}`));
    }
  }

  request(url, successCb, errCb) {
    window.fetch(url)
      .then(MovieAPI.status)
      .then(res => res.json())
      .then(successCb)
      .catch((error) => {
        errCb(error);
      });
  }

  /**
   * @param successCb {Function} Callback
   * @param errCb {Function}
   */
  getGenres(successCb, errCb) {
    this.request(`${this.api.root}${this.api.endpoints.genre}?api_key=${this.api.key}`, successCb, errCb);
  }

  /**
   * @param query {String}
   * @param successCb {Function}
   * @param errCb {Function}
   */
  searchMovies(query, successCb, errCb) {
    this.request(`${this.api.root}${this.api.endpoints.search}?query=${query}&api_key=${this.api.key}`, successCb, errCb);
  }

}

export default MovieAPI;
