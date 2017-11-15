angular.module('app')
    .config(function (
        $stateProvider,
        $urlRouterProvider,
        $locationProvider) {
            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise('/');
          
            $stateProvider  
                .state('/', { //definiamo tutti i nostri stati 
                    url : '/',
                    views: {
                        'navbar' : {
                            templateUrl : '/app/UI/navbar.html',
                            controller : 'navCtrl'
                        },
                        'contenuto' : {
                            templateUrl : '/app/resource/home/home.template.html'
                        },
                    } 
                })
                .state('films', { //definiamo tutti i nostri stati 
                    url : '/films',
                    resolve : {
                        films : function (filmSrv) {
                            
                            return filmSrv.getAll();
                        }
                    },
                    views: {
                        'navbar' : {
                            templateUrl : '/app/UI/navbar.html',
                            controller : 'navCtrl'
                        },
                        'contenuto' : {
                            templateUrl : '/app/resource/films/film.template.html',
                            controller : 'filmCtrl',
                        },
                    }
                    
                })
                .state('film', { //definiamo tutti i nostri stati 
                    url : '/film/{id}',
                    resolve : {
                        film : function (filmSrv, $stateParams) {
                            
                            return filmSrv.getOne($stateParams.id);
                        }
                    },
                    views: {
                        'navbar' : {
                            templateUrl : '/app/UI/navbar.html',
                            controller : 'navCtrl'
                        },
                        'contenuto' : {
                            templateUrl : '/app/resource/films/one.template.html',
                            controller : 'oneCtrl',
                            controllerAs : 'mv' //model view
                        },
                    }
                    
                })
        });
    