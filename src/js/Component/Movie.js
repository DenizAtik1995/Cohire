import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const { movie } = props;
  let imagePath;

  if (movie.poster_path === false) {
    imagePath = 'https://via.placeholder.com/1200x1800.png?text=No+Poster';
  } else {
    imagePath = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  }

  return (
    <div className="movie">
      <header className="movie__header">
        <div className="movie__details">
          <h3>{movie.title}</h3>
          <div className="movie__genres">
            <p>
              {
                props.genres.filter(genre => {
                  return movie.genre_ids.some((id) => genre.id === id);
                }).map((item, i, array) => {
                  return <span key={item.id}>{array.length !== (i + 1) ? `${item.name} | ` : item.name}</span>
                })
              }
            </p>
          </div>
        </div>
        <div className="movie__rating">
          <span>{movie.vote_average}</span>
        </div>
      </header>
      <div className="movie__image">
        <img src={imagePath} width="1200" height="1800" alt={`Poster for ${movie.title}`}/>
      </div>
      <div className="movie__content">
        <div className="movie__overview">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]).isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genre_ids: PropTypes.array.isRequired,
    vote_average: PropTypes.number.isRequired
  }).isRequired,
  genres: PropTypes.array.isRequired
};
