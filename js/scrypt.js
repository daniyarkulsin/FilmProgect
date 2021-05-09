
'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieaDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?',''),
      b = prompt ('На сколько оцените его?',''),
      c = prompt('Один из просмотренных фильмов?',''),
      d = prompt ('На сколько оцените его?','');

personalMovieaDB.movies[a] = b;
personalMovieaDB.movies[c] = d;

console.log(personalMovieaDB)