var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var path = require('path');



var Schema = mongoose.Schema;


var genereSchema = new Schema ( {
    id: {
        type: Number,
        require : true
    },
    name:{
        type: String,
        required: true
    }
} )

genereSchema.post('remove', function(genere) {

    console.log(genere.id);
    var filmModel = require('./../films/filmModel.js');
    filmModel.update({},{
        $pull: { genre_ids : genere.id}
    })
    .exec();
});


var Genere = mongoose.model('generi',genereSchema);

module.exports = Genere;