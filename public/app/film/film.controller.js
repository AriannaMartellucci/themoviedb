angular.module("app") .controller("filmCtrl", function($scope, filmSrv) { 
         
    filmSrv.getAll() 
        .then(function(res) { 
            console.log(res);
            $scope.films = res.data; 
        }) 
        .catch(function(err) { 
            return err; 
        }); 
});