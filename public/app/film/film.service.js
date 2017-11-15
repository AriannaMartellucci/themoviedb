angular.module("app").service("filmSrv", function ($http) {

    const url = '/api/films';
    
    var getAll = function () {
        return $http({
            method: 'GET',
            url: url,
        });
    }

    var getOne = function (id) {
        console.log(id);
        return $http({
            method: 'GET',
            url: url + '/' + id,
        });
    }

    var getBeforeId = function (id) {
        console.log(id);
        return $http({
            method: 'GET',
            url: url + '/' + id,
        });
    }

    var getAfterId = function (id) {
        console.log(id);
        return $http({
            method: 'GET',
            url: url + '/' + id,
        });
    }


    return {
        getAll: getAll,
        getOne : getOne
        }
    }
);