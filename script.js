"use strict";
const numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: '',
    movies: {

    },
    actors: {},
    genres:[],
    private: false
}
const film = prompt('Один из последних просмотренных фильмов?', '');
const markFilm = prompt ('На сколько оцените его?', '');

personalMovieDB.movies[film] = markFilm;
console.log(personalMovieDB)