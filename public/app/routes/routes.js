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
                    resolve : {
                        generi : function (generiSrv) {
                            
                            return generiSrv.generiGetAll();
                        }
                    },
                    views: {
                        'navbar' : {
                            templateUrl : '/app/UI/navbar.html',
                            controller : 'generiCtrl'
                        },
                        'contenuto' : {
                            templateUrl : '/app/resource/home/home.template.html'
                        },
                    } 
                })
                .state('films', { 
                    url : '/films',
                    resolve : {
                        films : function (filmSrv) {
                            
                            return filmSrv.getAll();
                        },
                        generi : function (generiSrv) {
                            
                            return generiSrv.generiGetAll();
                        }
                    },
                    views: {
                        'navbar' : {
                            templateUrl : '/app/UI/navbar.html',
                            controller : 'generiCtrl'
                        },
                        'contenuto' : {
                            templateUrl : '/app/resource/films/film.template.html',
                            controller : 'filmCtrl',
                        },
                    }
                    
                })
                .state('film', { 
                    url : '/film/{id}',
                    resolve : {
                        film : function (filmSrv, $stateParams) {
                            
                            return filmSrv.getOne($stateParams.id);
                        },
                        generi : function (generiSrv) {
                            
                            return generiSrv.generiGetAll();
                        }
                    },
                    views: {
                        'navbar' : {
                            templateUrl : '/app/UI/navbar.html',
                            controller : 'generiCtrl'
                        },
                        'contenuto' : {
                            templateUrl : '/app/resource/films/one.template.html',
                            controller : 'oneCtrl',
                            controllerAs : 'mv' //model view
                        },
                    }
                    
                })

                .state('inseriscifilm', { 
                    url : '/films/inserisci',
                    resolve : {
                        generi : function (generiSrv) {
                            return generiSrv.generiGetAll();
                        }
                    },
                    views: {
                        'navbar' : {
                            templateUrl : '/app/UI/navbar.html',
                            controller : 'generiCtrl'
                        },
                        'contenuto' : {
                            templateUrl : '/app/resource/films/nuovoFilm.template.html',
                            controller : 'nuovofilmCtrl'
                        },
                    }
                    
                })

                .state('upfilm', { 
                    url : '/film/modifica/{title}/{id}',
                    resolve : {
                        film : function (filmSrv, $stateParams) {
                            return filmSrv.getOne($stateParams.id);
                        },
                        generi : function (generiSrv) {
                            return generiSrv.generiGetAll();
                        }
                    },
                    views: {
                        'navbar' : {
                            templateUrl : '/app/UI/navbar.html',
                            controller : 'generiCtrl'
                        },
                        'contenuto' : {
                            templateUrl : '/app/resource/films/upfilm.template.html',
                            controller : 'upfilmCtrl'
                        },
                    }
                    
                })

                
                    
                
        });
    