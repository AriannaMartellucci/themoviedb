angular.module("app").service("generiSrv", function ($http) {

    console.log('generi Service OK');
    
        var generiGetAll = function () {
            return $http({
                method: 'GET',
                url: 'api/generi',
            });
        }

        return {

            generiGetAll : generiGetAll
        }
})