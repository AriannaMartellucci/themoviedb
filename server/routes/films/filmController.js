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

    return {
        getAll : getAll
    }
})();

