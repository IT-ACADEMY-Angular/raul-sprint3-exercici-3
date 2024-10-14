const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director === director);
  let average = moviesFromDirector.reduce((acumulador, movie) => acumulador + movie.score, 0) / moviesFromDirector.length;
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let copiaArrayParaNoMutar = [...array];
  // let orderByTitle = copiaArrayParaNoMutar.sort((a, b) => {
  //   if (a.title > b.title) return 1;
  //   if (a.title < b.title) return -1;
  //   return 0;
  // });

  //arrow function en 1 linea, revisar
  let orderByTitle = copiaArrayParaNoMutar.sort((a, b) => a.title.localeCompare(b.title));
  return orderByTitle.slice(0, 20).map(movie => movie.title);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let copiaArrayParaNoMutar = [...array];
  let orderByYear = copiaArrayParaNoMutar.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return orderByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const filteredMovies = movies.filter(movie => movie.genre.includes(genre));
  if (filteredMovies.length === 0) {
    return 0;
  }
  const totalScore = filteredMovies.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);
  const averageScore = totalScore / filteredMovies.length;
  return Number(averageScore.toFixed(1));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
