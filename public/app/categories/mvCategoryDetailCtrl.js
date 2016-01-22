angular.module('app').controller('mvCategoryDetailCtrl', function($http, $scope, $routeParams, mvNotifier, $location) {

 $http.get('/api/categories/'+$routeParams.id).then(function(response) {   
     if (response.data) {
            $scope.cat=response.data; 
            console.log(response.data);
        } 
    });


 $scope.updateCategory = function(isValid){
      if(isValid){
        console.log($scope.cat);
        $http.put('/api/categories/'+$scope.cat._id,$scope.cat).then(function(response) {
         console.log(response);
          mvNotifier.notify('Updated successfully!');
          $location.path('/categories');
          
        });
      }
    }
});