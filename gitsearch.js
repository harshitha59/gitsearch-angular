var mod = angular.module('mymod',[])
mod.controller('mycntrl', function($scope, $http){
    $scope.search = function() {
            $http.get('https://api.github.com/users/'+$scope.user)
            .then(function(response){
                $scope.details= [response.data];
                console.log($scope.details)
                
            })
    }

})