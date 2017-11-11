angular.module("app").service("filmSrv", function ($http) {

    const url = '/api/films';
    
    var getAll = function () {
        return $http({
            method: 'GET',
            url: url,
        });


    return {
        getAll: getAll
        }
    }
});