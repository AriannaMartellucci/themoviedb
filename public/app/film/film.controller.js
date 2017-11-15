angular.module("app").controller("filmCtrl", function($scope, filmSrv) { 

    filmSrv.getAll() 
        .then(function(res) { 
            $scope.films = res.data; 
        }) 
        .catch(function(err) { 
            return err; 
        }),


    

    $scope.dettagliofilm = function(index, id){

        filmSrv.getOne(id) 
        .then(function(res) { 
            $scope.film = res.data;
            $scope.filmBefore = $scope.films.slice(0,index);
            $scope.filmAfter = $scope.films.slice(index+1,$scope.film.lenght)
            })
         
        .catch(function(err) { 
            return err;  
        }),

        $scope.visibile = !$scope.visibile;
        

       
        
    }

    

    

    
});