angular.module("app").controller("nuovofilmCtrl", function($scope, filmSrv, generi) { 

    $scope.generi = generi.data;

    $scope.piuimput = function(){
        $scope.visibile = !$scope.visibile;
    }

    $scope.selectgen = [];
    $scope.addselectgen = function(addgen){
        var diverso = true;
        diverso = $scope.selectgen.every(el => {
            return el.id != addgen.id
        })
        if (diverso){
            $scope.selectgen.push(addgen);
        }  
    }

    $scope.deladdgen = function(id){
        $scope.selectgen.splice(id,1);
        console.log($scope.selectgen);
    }

        
    

    
    
    

    $scope.inseriscifilm = function (nuovofilm) {
    
        var idgeneri = [];
        $scope.selectgen.forEach(function(gen){
            idgeneri.push(gen.id);
        })

        var nuovoFilm = {
            'title' : nuovofilm.titolofilm,
            'poster_path' : nuovofilm.posterfilm,
            'genre_ids' : idgeneri,
            'overview' : nuovofilm.tramafilm,
            'video' : nuovofilm.trailler,
            'original_title' : nuovofilm.origtit,
            'original_language' : nuovofilm.origling,
            'release_data' : nuovofilm.anno,
            'adult' : nuovofilm.adult,
        };

        filmSrv.insertOne(nuovoFilm)
            .then((result) => {
                console.log(result.data);
                $scope.nuovoFilm = result.data;
            },function(err){
                console.log(err);
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    

})