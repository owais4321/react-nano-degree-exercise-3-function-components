import React from 'react';
import MovieCard from './MovieCard';

function MovieCardsList(props){
  
    /*
  Destructuring via ES6. We're getting the profiles, users, and movies properties
  off of the pros passed into this presentational component. If you need a refresher on this syntax, check
  out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
  */

    const { profiles, users, movies } = props;
    const usersByMovie = {};

    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (usersByMovie[movieID]) {
        usersByMovie[movieID].push(profile.userID);
      } else {
        usersByMovie[movieID] = [profile.userID];
      }
    });

    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));

    /*
    Return JSX
    */
    return <ul>{movieCards}</ul>;
  }

export default MovieCardsList;
