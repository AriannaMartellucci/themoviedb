var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

console.log('model loaded');

var path = require('path');
var Genere = require(path.join(__dirname, '..', 'generi', 'generiModels.js'));

var Schema = mongoose.Schema;

var filmSchema = new Schema ( {
    vote_count: {
        type: Number,
        default : 0
    },
    video:{
        type: String,
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
    },
    original_title: {
        type: String,
    },
    genre_ids:[
        {
            type: [Number],
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
        type: String,
        required: true
    },
    release_data: {
        type: String,
        require: false
    }

}, { toJSON: { virtuals: true } } ); 

filmSchema.virtual('generi_film', {
    ref: 'generi',
    localField: 'genre_ids',
    foreignField: 'id',
    justOne: false
});




var Film = mongoose.model('film', filmSchema);

// var film1 = new Film({
//     titolo: 'alla ricerca di nemo'
// })


module.exports = Film;



    


