angular.module("app").controller("generiCtrl", function($scope, generi, $rootScope) { 

    console.log('generi Controller OK');

    $scope.generi = generi.data;
    $scope.filtragenere = function(){
        $rootScope.generefiltrareid = $scope.gen.id;
    }

})