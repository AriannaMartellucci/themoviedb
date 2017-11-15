angular.module("app").controller("oneCtrl", function(film) { 
    
        console.log('oneController OK');
    
        this.film = film.data;
})    