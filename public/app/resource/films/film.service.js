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

    var updateVote = function (id, voto) {
        return $http({
            method: 'PUT',
            url:'api/films/voto/'+id,
            data : voto
        });
    }

    var insertOne = function (nuovoFilm) {
        return $http({
            method: 'POST',
            url:'api/films',
            data : nuovoFilm
        });
    }

    var deleteOne = function (id) {
        return $http({
            method : 'DELETE',
            url : 'api/films/' + id,
        })
    }

    var upfilm = function () {
        return $http({
            method : 'PUT',
            url : 'api/films/' + id,
        })
    }

    return {
        getAll: getAll,
        getOne : getOne,
        updateVote : updateVote,
        insertOne : insertOne,
        deleteOne : deleteOne,
        upfilm : upfilm
    }
});