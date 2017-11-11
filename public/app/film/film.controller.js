angular.module("app").controller("filmCtrl", function($scope, filmSrv) { 
         
    console.log('ciaociao');

    filmSrv.getAll() 
        .then(function(res) { 
            console.log('ciao');
            $scope.films = res.data; 
        }) 
        .catch(function(err) { 
            return err; 
        }); 
});