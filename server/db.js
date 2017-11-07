var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/dblibrary', 
{useMondoClient: true}, 
function(err){
    if(err){
        console.log('errore di connessione al db');
    }else{
        console.log('connesso al db');
    }
});


