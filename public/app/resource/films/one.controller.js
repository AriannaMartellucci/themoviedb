angular.module("app").controller("oneCtrl", function (film, filmSrv) {

    console.log('oneController OK');

    if(!film.data.poster_path.includes('https')){
        film.data.poster_path = 'https://image.tmdb.org/t/p/w500/' + film.data.poster_path;
    }
    this.film = film.data;

    this.stelle = [
        {
            colorata: false
        },
        {
            colorata: false
        },
        {
            colorata: false
        },
        {
            colorata: false
        }, {
            colorata: false
        }
    ];

    this.colora = function (indice) {
        console.log(indice);
        for (let i = 0; i <= indice; i++) {
            this.stelle[i].colorata = true;
        }
    }

    this.decolora = function () {
        this.stelle.forEach(stella => {
            stella.colorata = false;
        });
    }

    this.vota = function (indice) {
        var voto = {
            'voto_nostro': (indice + 1) * 2
        }
        filmSrv.updateVote(this.film._id, voto)
            .then((result) => {
                console.log(result.data);
                this.film = result.data;
            }, function (err) {
                console.log(err);
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    this.delfilm = function (objid) {
        filmSrv.deleteOne(objid.id)
            .then((results) => {
                console.log(results);
            })
            .catch(function (err) {
                console.log(err);
            })
    }

})    
