var mongoose = require('mongoose');


mongoose.connect('mongodb://marcellaina:frifrifri2@ds257245.mlab.com:57245/themoviedb', 
{useMondoClient: true}, 
function(err){
    if(err){
        console.log('errore di connessione al db');
    }else{
        console.log('connesso al db');
    }
});


