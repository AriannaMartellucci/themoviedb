angular.module("app").service("filmSrv", function ($http) {

    console.log('film Service OK');

    var getAll = function () {
        return $http({
            method: 'GET',
            url: 'api/films',
        });
    }

    var getOne = function (id) {
        return $http({
            method: 'GET',
            url:'api/films/' + id,
        });
    }

    return {
        getAll: getAll,
        getOne : getOne
    }
});