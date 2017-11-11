module.exports = (function(){

    var Film = require('./filmModel.js');
  


    var getAll = function(req,res){
        //query al database 
        Film.find()
            .exec()
            .then(function(films){
                res.status(200).json(films);
            })
            .catch(function(err){
                res.status(500).send(err);
            })

    }

    var getAllconGeneri = function(req,res){
        //query al database 
        Film.find()
            .populate({ path: 'generi_film', select: 'name -_id'})
            .exec()
            .then(function(films){
                res.status(200).json(films);    
            })
            .catch(function(err){
                res.status(500).send(err);
            })

    }

    var getOne = function(req,res){
        Film.findById(req.params.id)
            .then(function(films){
                res.status(200).json(films)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
    }

    var getByTitle = function(req,res){
        Film.find({title : req.query.title})
            .exec()
            .then(function(films){
                res.status(200).json(films)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
    }

    var insertOne = function(req,res){
        console.log(req.body);
        var nuovoFilm = new Film(req.body);
        nuovoFilm.save()
            .then(function(nuovoFilm){
                res.status(200).json(nuovoFilm)
            })
            .catch(function(err){
                res.status(500).send(err)
            })
    }

    var deleteOne = function(req,res){
        Film.findByIdAndRemove(req.params.id)
        .exec()
        .then(function (films) {
            res.status(200).json(films);
            console.log(req.params.title + ' rimosso dal db');
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
    }

    var updateOne = function(req, res){
        Film.findByIdAndUpdate(req.params.id, {$set: req.body})
        .exec()
        .then(function (films){
            res.status(200).json(films);
        })
        .catch(function (err) {
            res.status(500).send(err);
        });
    }

    var changeVote = function(req,res){
        Film.findById(req.params.id)
            .exec()
            .then(function(films){
                var new_vote = req.body.voto;
                // console.log(new_vote);
                console.log(films);
                console.log(films['vote_average']);
                var media_tot = parseInt(films.vote_average * films.vote_count);
                // console.log(films.vote_count);
                // console.log(media_tot);
                // var new_media = media_tot + new_vote;
                // films.vote_count = films.vote_count + 1;
                
                // films.vote_average = new_media/films.vote_count;
                // return films.save;
            })
            .then(function(films){
                res.status(200).json(films);
            })
            .catch(function(err){
                res.status(500).send(err);
            });   
    } 


        var updateVote = function(req,res) {
            Film.findById(req.params.id)
            .exec()
            .then(function (films) {
                var count= films.vote_count;
                    console.log(count);
                var voti= count+1;
                    console.log(voti);
                var media= films.vote_average;
                    console.log(media);
                var nuovovoto=req.body.voto_nostro;
                    console.log(nuovovoto);
                var calcolo= ((media*count)+nuovovoto)/voti;
                    console.log(calcolo);
                films.vote_average=calcolo;
                films.vote_count=voti;
                return film.save();
                
            })
            .then(function(film){
                res.status(200).json(film);
            })
            
            .catch(function (err) {
                res.status(500).send(err);
            });
        }
            
    


    return {
        getAll : getAll,
        getAllconGeneri : getAllconGeneri,
        getOne : getOne,
        getByTitle : getByTitle,
        insertOne : insertOne,
        deleteOne : deleteOne,
        updateOne : updateOne,
        changeVote : changeVote,
        updateVote : updateVote
        
    }
})();

