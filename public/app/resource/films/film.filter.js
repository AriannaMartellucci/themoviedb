angular.module("app").filter("generi", function () {

   return function(films, genereid){
       if(!genereid) return films;
       return films.filter(function(film){
           return film.genre_ids.some(function(genid){
               return genid == genereid;
           })
       });

   }

    
})