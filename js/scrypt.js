
'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')
    }
}

start();

const personalMovieaDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    if (personalMovieaDB.count < 10){
        console.log('Просмотренно давольно мало фильмов!');
    } else if (personalMovieaDB.count >= 10 && personalMovieaDB.count < 30) {
        console.log('Вы класический зритель');
    } else if(personalMovieaDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Пройзошла ошибка');
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из просмотренных фильмов?',''),
            b = prompt ('На сколько оцените его?','');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieaDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error')
            i--;
        }
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieaDB);
    }
};

showMyDB(personalMovieaDB.privat);

function writeYourGenerals() {
    for (let i = 1; i <= 3; i++) {
        personalMovieaDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);
    }
}

writeYourGenerals();