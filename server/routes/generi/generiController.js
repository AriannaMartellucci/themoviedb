module.exports = (function(){
    
    var path = require('path');

    var Genere = require('./generiModels.js');
    var Film = require(path.join(__dirname, '..', 'films', 'filmModel')); 


    var getAllgeneri = function(req,res){
        //query al database 
        Genere.find()
            .exec()
            .then(function(generi){
                res.status(200).json(generi);
            })
            .catch(function(err){
                res.status(500).send(err);
            })
    }

    var insertOne = function(req,res){
        var nuovoGenere = new Genere(req.body);
        nuovoGenere.save()
            .then(function(nuovoGenere){
                res.status(200).json(nuovoGenere)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
    }

    var deleteOne = function(req,res){
        Genere.findById(req.params.id)
        .exec()
        .then(function(generi){
            return generi.remove();
        })
        .then(function (generi) {
            res.status(200).json(generi);
            // console.log(generi.name + ' rimosso dal db');
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
    }



    return {
        getAllgeneri : getAllgeneri,
        insertOne : insertOne,
        deleteOne : deleteOne
    }


})();


    
