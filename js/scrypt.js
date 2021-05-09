
'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieaDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieaDB.count < 10){
    console.log('Просмотренно давольно мало фильмов!');
} else if (personalMovieaDB.count >= 10 && personalMovieaDB.count < 30) {
    console.log('Вы класический зритель');
} else if(personalMovieaDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Пройзошла ошибка');
}


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

console.log(personalMovieaDB)  