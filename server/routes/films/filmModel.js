var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var Schema = mongoose.Schema;

var filmSchema = new Schema ( {
    vote_count: {
        type: Number,
        default : 0
    },
    video:{
        type: Boolean,
        default: false
    },
    vote_avarage:{
        type: Number,
        dafault: 0
    },
    title: {
        type: String,
        require: true
    },
    popularity: {
        type: Number,
        default: 0
    },
    poster_path: {
        type: String,
    },
    original_language: {
        type: String,
        required: true
    },
    original_title: {
        type: String,
        required: true
    },
    genre_ids:[
        {
            type: Number,
            required: true
        }
    ],
    backdrop_path:{
        type: String
    },
    adult:{
        type: Boolean,
        default: false
    },
    overview: {
        type: String
    },
    release_data: {
        type: String,
        require: true
    }

})




var Film = mongoose.model('film',filmSchema);

var film1 = new Film({
    titolo: 'alla ricerca di nemo'
})


module.exports = Film;

// libro1.save()
//     .then(function(){
//         console.log('libro 1 inserito nel db');
//     })
//     .catch(function(){

//     })

    


