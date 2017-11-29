angular.module("app").controller("upfilmCtrl", function ($scope, film, generi, filmSrv) {

    
    $scope.film = film.data;
  

    $scope.generi = generi.data;
    
    
    $scope.genfilm = [];
    $scope.film.genre_ids.forEach(idgen => {
        $scope.generi.forEach(gen => {
            if(gen.id == idgen){
                $scope.genfilm.push(gen);
            }
        })
    });

    console.log($scope.genfilm);

    $scope.delgen = function(igen){
        $scope.genfilm.splice(igen,1);
        console.log($scope.genfilm);
    }

    $scope.addgen = function(gen){
        $scope.genfilm.push(gen);
    }


    
    
    // filmSrv.upfilm(objid.id)
    //     .then((results) => {
    //         console.log(results);
    //         this.upfilm = result.data;
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     })

})