angular.module("app").controller("filmCtrl", function($scope, films, filmSrv) { 

    console.log('filmController OK');
    
    films.data.forEach(film => {
        if(!film.poster_path.includes('https')){
            film.poster_path = 'https://image.tmdb.org/t/p/w500/' + film.poster_path;
        }
    });

    $scope.films = films.data;
    
    

            

});