module.exports = function (app, express) {

    var path = require('path');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());

    app.use('/bootstrap', express.static(path.join(__dirname, '..','..', 'node_modules', 'bootstrap')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));
    app.use('/css', express.static(path.join(__dirname, '..', '..', 'public', 'css')));
    app.use('/js', express.static(path.join(__dirname, '..', '..', 'public', 'js')));
    app.use('/angular', express.static(path.join(__dirname, '..','..','node_modules','angular')));
    app.use('/angular-ui-router', express.static(path.join(__dirname, '..', '..','node_modules', 'angular-ui-router')));
    app.use('/jquery', express.static(path.join(__dirname,'..','..','node_modules','jquery')));
    app.use('/app', express.static(path.join(__dirname, '..','..','public','app')));
    
    
    
    app.use('/api/films', require('./films'));
    app.use('/api/tvs', require('./tvs'));
    app.use('/api/generi', require('./generi'));
    
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });
    // app.get('/*', (req, res) => {
    //     res.status(404).redirect("/");
    // });


}